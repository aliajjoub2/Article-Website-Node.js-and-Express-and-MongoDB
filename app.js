const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Ali 2 44455 sll reerrerew')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})