import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

import getCurrentWeather from './services/ApiWeather'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function App() {

  const [tempAtual, setTempAtual] = useState('27')

  const [currentTemperature, setCurrentTemperature] = useState('31')

  const [locationCoords, setLocationCoords] = useState(null);

  const [locationName, setLocationName] = useState('Espanha, Madrid')

  const [temperatureMin, setTemperatureMin] = useState('21')
  const [temperatureMax, setTemperatureMax] = useState('32')
  const [wind, setWind] = useState('7')
  const [humidity, setHumidity] = useState('68')

  async function getLocation() {
    let { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied')
    } else {
      let location = await Location.getCurrentPositionAsync({})
      await setLocationCoords(location.coords)
    }
  }


  async function setCurrentWeather() {
    await getLocation()
    const data = await getCurrentWeather(locationCoords)


    setCurrentTemperature(convertKelvinToC(data[0]))
    setLocationName(data[1])


  }

  function convertKelvinToC(kelvin) {
    return parseInt(kelvin - 273)
  }

  useEffect(() => {
    setCurrentWeather()
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.iconRefresh} onPress={() => setCurrentWeather()}>
          <SimpleLineIcons name="refresh" size={34} color="blue" />
        </TouchableOpacity>
      </View>
      <Text style={styles.tempText}>{currentTemperature}<MaterialCommunityIcons name="temperature-celsius" size={30} color="grey" /></Text>
      <Text style={styles.localizationText}><Entypo name="location-pin" size={24} color="blue" /> {locationName}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTemp: {
    marginTop: 10,

  },
  tempText: {
    fontSize: 45,
    color: '#fa2',
  },
  iconRefresh: {
    alignSelf: "flex-end",
    margin: 10,
    marginTop: 30,
  },
  localizationText: {
    fontSize: 24,
    color: '#fa2',
  }
});
