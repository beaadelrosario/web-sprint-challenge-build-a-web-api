const express = require('express');
const projectsDb = require("./projectModel");
const actionsDb = require("./actionModel");

const router = express.Router();

router.get('/', validateProjectId, (req, res) => {
    res.status(200).json({ message: "success" });
  });
  
  router.get('/:id', (req, res) => {
    res.status(200).json({ message: "success" });
  });
  
  router.delete('/:id', (req, res) => {
    res.status(200).json({ message: "success" });
  });
  
  router.put('/:id', (req, res) => {
    res.status(200).json({ message: "success" });
  });

  // custom middleware

function validateProjectId(req, res, next) {
    // do your magic!
    console.log("middleware hit!")
    next();
  }
  
  module.exports = router;