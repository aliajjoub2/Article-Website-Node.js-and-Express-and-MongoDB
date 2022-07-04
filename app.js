const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

/* app.get('/', (req, res) => {
  res.send('<h1> Hello World! Ali 2 44455 sll reerrerew <\h1>')
}) */
app.get('/html', (req, res) => {
  res.render("index")
})
app.get('/', (req, res) => {
  res.redirect('/html')
})

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})