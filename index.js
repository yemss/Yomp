const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.use('/static', express.static('static'))

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '/view/index.html'))

})

app.get('/auth', (req, res) => {

  res.sendFile(path.join(__dirname, '/view/authentication.html'))

})

app.listen(port, () => {
  console.log(`Webserver listening on port localhost:${port}`)
})