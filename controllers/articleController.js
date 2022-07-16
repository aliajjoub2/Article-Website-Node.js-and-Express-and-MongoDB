// To import model & schema
const Article = require("../models/articleSchema");


const aticle_details_get = (req, res) => {
    // result =   object  inside mongo database
   
    Article.findById(req.params.id)
      .then((result) => {
        res.render("details", { title: "ARTICLE DETAILS", objArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const article_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
      .then((params) => {
        res.json( {mylink: "/"} );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  module.exports = {
    aticle_details_get,
    article_delete
   
  }; 