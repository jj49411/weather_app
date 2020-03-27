const request = require('request')
const API_KEY = require('./utils/darkSky')

const url = 'https://api.darksky.net/forecast/' + API_KEY

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  comsole.log(data.currently)
})