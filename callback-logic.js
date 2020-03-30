//Callback logic
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


// Object property shorthand
const name = 'Julie'
const userAge = 7

const user = {
    name,
    age: userAge,
    location: 'London'
}

console.log(user)

// Object destructuring
const product = {
    label: 'Cat book',
    price: 9,
    stock: 10,
    salePrice: undefined,
    rating: 4.7
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)