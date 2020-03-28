const request = require('request')

const url = 'https://api.darksky.net/forecast/5d21d057806d759017a1a2a10f37b1af/37.8267,-122.4233?units=si'
const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1Ijoiamo0OTQxMSIsImEiOiJjazhiZDl6M2wwN2hsM2VrYXM1cHc5djNhIn0.ElasCKxGyRHlKrnYufqg1A&limit=1'

request({ url: url, json: true }, (error, response) => {
  const temperature = response.body.currently.temperature
  const rainChance = response.body.currently.precipIntensity
  const summary = response.body.currently.summary

  if(error) {
    console.log('Unable to connect to weather service')
  }else if(response.body.error) {
    console.log('Location not found')
  }else{
    console.log('Current weather: ' + summary)
    console.log('This is currently ' + temperature + ' degrees out. There is a ' + rainChance + '% chance of rain.')
  }
  
})

//Geocoding
//Address -> Lat/Long -> Weather
request({  url:urlGeo, json: true}, (error, response) => {
  const location = response.body.features[0].place_name
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]

  if(error) {
    console.log('Unable to connect to geolocation service')
  }else if(response.body.features.length == 0) {
    console.log('No matching location')
  }else{
    console.log('Location: ' + location)
    console.log(latitude, longitude)
  }
  
})
