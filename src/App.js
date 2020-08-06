import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { MainCard } from './components/MainCard' 

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function App() {

  const [tempAtual, setTempAtual] = useState('27')
  const [local, setLocal] = useState('BR, Foratleza')

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Text style={styles.iconRefresh}>
            <SimpleLineIcons name="refresh" size={34} color="blue" />
          </Text>
        </TouchableOpacity>
      </View>
      <Text><MaterialCommunityIcons name="weather-sunny" size={24} color="black" /></Text>
      <Text style={styles.tempText}>{tempAtual} <MaterialCommunityIcons name="temperature-celsius" size={30} color="grey" /></Text>
      <StatusBar style="auto" />
      <View>
        <MainCard></MainCard>
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
  viewTemp: {
    marginTop: 10,

  },
  tempText: {
    fontSize: 40,
  },
  iconRefresh: {
    alignSelf: "flex-end",
    margin: 10,
    marginTop: 30,
  }
});
