export default async function getCurrentWeather(locationCoords){
    
    const axios = require('axios')

    const lat = locationCoords.latitude
    
    const log = locationCoords.longitude

    var results = []

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=323f676510a6d6c310ef093230d42dd0`)
    
        .then(function (response){

            const data = response.data     
            const locationName = (data.name  + ' ' +  ' - '  + ' ' +  data.sys.country)
            const currentTemperature = data.main.temp
            
            results = [currentTemperature, locationName]
            // [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            
        })
        .catch(function (error) {
            console.log(error)
        })

    return results
  }