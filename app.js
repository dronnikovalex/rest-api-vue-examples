const express = require('express')
const path = require('path')
const app = express()
const { v4 } = require('uuid')

let CONTACTS = [
  {id: '1', name: 'Alex', value: 'Alex value', marked: false},
  {id: '2', name: 'Ivan', value: 'Ivan value', marked: false},
  {id: '3', name: 'Miwa', value: 'Miwa value', marked: false},
  {id: '4', name: 'Anna', value: 'Anna value', marked: false},
]

app.use(express.json())

//GET contacts
app.get('/api/contacts', (req, res) => {
  setTimeout(() => {
    res.status(200)
    res.json(CONTACTS)
  }, 1000);
})
//POST create contact
app.post('/api/contacts', (req, res) => {
  const contact = {...req.body, id: v4(), marked: false}
  CONTACTS.push(contact),
  console.log(CONTACTS)
  res.status(200)
  res.json(contact)
})
//DELETE contact
app.delete('/api/contacts/:id', (req, res) => {
  CONTACTS = CONTACTS.filter(c => c.id !== req.params.id)
  console.log(CONTACTS)
  res.status(200)
  res.json('Contact deleted')
})
//PUT contact
app.put('/api/contacts/:id', (req, res) => {
  const idx = CONTACTS.findIndex(c => c.id == req.params.id)
  CONTACTS[idx] = req.body
  res.json(CONTACTS[idx])
})
app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('server has been started at port 3000'))