const request = require('request')

const geocode = (address, callback) => {
  const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiamo0OTQxMSIsImEiOiJjazhiZDl6M2wwN2hsM2VrYXM1cHc5djNhIn0.ElasCKxGyRHlKrnYufqg1A&limit=1'

  request({ url:urlGeo, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to geolocation service', undefined)
    }else if(response.body.features.length === 0) {
      callback('No matching location', undefined)
    }else {
      callback(undefined, {
        location: response.body.features[0].place_name,
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0]
      })
    }
  })
}

module.exports = geocode;
