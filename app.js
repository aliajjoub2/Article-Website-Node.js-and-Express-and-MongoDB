const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))

// auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 

/* app.get('/', (req, res) => {
  res.send('<h1> Hello World! Ali 2 44455 sll reerrerew <\h1>')
}) */
app.get('/', (req, res) => {
  res.render("index")
})
/* app.get('/', (req, res) => {
  res.redirect('/html')
}) */

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})