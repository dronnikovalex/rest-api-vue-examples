const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
  {id: 1, name: 'Alex', value: 'Alex value', marked: false},
  {id: 1, name: 'Ivan', value: 'Ivan value', marked: false},
  {id: 1, name: 'Miwa', value: 'Miwa value', marked: false},
  {id: 1, name: 'Anna', value: 'Anna value', marked: false},
]

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('server has been started at port 3000'))