import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

import getCurrentWeather from './services/ApiWeather'
import Video from 'react-native-video'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function App() {
  setCurrentWeather()

  const image = { uri: "https://reactjs.org/logo-og.png" };


  const [currentTemperature, setCurrentTemperature] = useState('')

  const [locationCoords, setLocationCoords] = useState(null);

  const [locationName, setLocationName] = useState('')




  state = {
    rate: 1,
    volume: 1,
    repeat: true,
    resizeMode: "cover",
    duration: 0.0,
    currentTime: 0.0,
  };

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
      <Video source={{ uri: "https://n1soluciones.es/img/skyVideo.mp4" }}
        ref={(ref) => {
          this.player = ref
        }}
        onBuffer={this.onBuffer}
        resizeMode={this.state.resizeMode}
        repeat={this.state.repeat}
        onError={this.videoError}
        style={styles.backgroundVideo} />
      <View style={styles.cardTemp}>
        <Text style={styles.tempText}>{currentTemperature}<MaterialCommunityIcons name="temperature-celsius" size={30} color="#434aaa" /></Text>
        <Text style={styles.localizationText}><Entypo name="location-pin" size={24} color="blue" /> {locationName}</Text>
        <StatusBar style="auto" />
      </View>
      <View >
          <TouchableOpacity style={styles.cardRefresh} onPress={() => setCurrentWeather()}>
            <SimpleLineIcons name="refresh" size={34} color="blue" />
          </TouchableOpacity>
      </View>
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

  },
  viewTemp: {
    marginTop: 10,

  },
  tempText: {
    fontSize: 45,
    color: 'blue',
  },
  localizationText: {
    fontSize: 24,
    color: '#434aaa',
  },
  cardTemp: {
    backgroundColor: 'rgba(255,255,255,0.56)',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 40,
    paddingBottom: 60,
    paddingRight:50,
    paddingLeft:50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRefresh: {
    backgroundColor: 'rgba(255,255,255,0.56)',
    marginTop:50,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight:20,
    paddingLeft:20,
    borderRadius: 100,
  }
});
