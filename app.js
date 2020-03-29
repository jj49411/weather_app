const geocode = require('./helpers/geocode')
const forecast = require('./helpers/forecast')

geocode('London', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

