const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/articleSchema"); // import Article from the articleSechema

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

// connect MongoDB
 
const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://ali-ajjoub:ali.node1984@cluster0.pxc5n.mongodb.net/?retryWrites=true&w=majority")
  .then( result => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  })
  .catch( err => {
    console.log(err);
  }); 

/* app.get('/', (req, res) => {
  res.send('<h1> Hello World! Ali 2 44455 sll reerrerew <\h1>')
}) */
app.get('/', (req, res) => {
  res.render("index")
})
app.get('/all-articles', (req, res) => {
  res.render("all-articles")
})
app.get('/add-new-article', (req, res) => {
  res.render("add-new-article")
})

/* app.get('/', (req, res) => {
  res.redirect('/html')
}) */




 
 // sve data in database
app.post("/all-articles", (req, res) => {
  const article = new Article(req.body);
 
  console.log(req.body);
 
  article
    .save()
    .then( result => {
      res.redirect("/all-articles");
    })
    .catch( err => {
      console.log(err);
    });
}); 

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})
