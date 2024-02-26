const express = require('express')
const app = express()
const { products,people } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.get('/people', (req, res) => {
  res.json(people)
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000....')
})