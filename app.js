const geocode = require('./helpers/geocode')
const forecast = require('./helpers/forecast')

const input = process.argv[2]

if(!input) {
  console.log('Please provide an address')
}else {
  geocode(input, (error, { latitude, longitude, location }) => {
  
    if(error) {
      return console.log('Error', error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      
      if(error) {
        return console.log('Error', error)
      }
      
      console.log(location)
      console.log(forecastData)
    })
  
  })
}
