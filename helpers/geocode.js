const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoiamo0OTQxMSIsImEiOiJjazhiZDl6M2wwN2hsM2VrYXM1cHc5djNhIn0.ElasCKxGyRHlKrnYufqg1A&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback('Unable to connect to geolocation service', undefined)
    }else if(body.features.length === 0) {
      callback('No matching location', undefined)
    }else {
      callback(undefined, {
        location: body.features[0].place_name,
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0]
      })
    }
  })
}

module.exports = geocode;
