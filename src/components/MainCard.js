import React,  { Component } from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity  } from 'react-native';


export default class MainCard extends Component{
    state = {
		location: null
	};
    static navigationOptions = {
        title: "Clima / Tempo"
    }
    findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);

				this.setState({ location });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
    };
    
    render (){
        return (
            <View style={styles.container}>
            <View>
              <TouchableOpacity>
                <Text style={styles.iconRefresh}>
                  <SimpleLineIcons name="refresh" size={34} color="blue" />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.tempText}>{currentTemperature}<MaterialCommunityIcons name="temperature-celsius" size={30} color="grey" /></Text>
            <Text><MaterialCommunityIcons name="weather-sunny" size={24} color="black" /></Text>
            <Text style={styles.localizationText}>{locationName}, 13:52</Text>
            
            <StatusBar style="auto" />
          </View>
        )
    }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
    }
})