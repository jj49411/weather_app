const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/5d21d057806d759017a1a2a10f37b1af/' + latitude + ',' + longitude + '?units=si'

  request({ url: url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to weather service', undefined)
    }else if(response.body.error){
      callback('Location not found', undefined)
    }else {
      callback(undefined, 'Current weather: ' + response.body.currently.summary + '.This is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipIntensity + '% chance of rain.')
    }
  })
}

module.exports = forecast;
