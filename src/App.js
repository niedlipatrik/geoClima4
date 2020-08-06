import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function App() {

  const [tempAtual, setTempAtual] = useState('27')
  const [local, setLocal] = useState('BR, Foratleza')

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.iconRefresh}>
          <SimpleLineIcons name="refresh" size={24} color="blue" />
        </Text>
      </TouchableOpacity>
      <Text><MaterialCommunityIcons name="weather-sunny" size={24} color="black" /></Text>
      <Text style={styles.tempText}>{tempAtual} <MaterialCommunityIcons name="temperature-celsius" size={30} color="grey" /></Text>
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
    fontSize: 40,
  },
  iconRefresh: {
    alignItems: "flex-end",
  }
});
