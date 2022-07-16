const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema")
// import from controller
const getControllers = require("../controllers/articleController")

// route show the article 
router.get("/details/:id", getControllers.aticle_details_get )

// route delete the Article  
router.delete("/details/:id", getControllers.article_delete )

  module.exports = router