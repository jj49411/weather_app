const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0,
      long: 0
    }

    callback(data)
  }, 2000)
}

geocode('Taipei', (data) => {
  console.log(data)
})

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b

    callback(sum)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
