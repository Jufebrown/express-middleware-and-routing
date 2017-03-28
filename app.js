`use strict`

const express = require('express')
const app = express()
const routes = require(`./routes/`)

app.use(express.static(__dirname + 'public'))

app.get('/home', (req, res, next) => {
  res.sendFile(join(__dirname, `../public`, `index.html`))
})

app.get('/see-our-chickens', (req, res, next) => {
  res.sendFile(join(__dirname, `../public`, `chickens.html`))
})

app.get('/see-our-eggs', (req, res, next) => {
  res.sendFile(join(__dirname, `../public`, `eggs.html`))
})
