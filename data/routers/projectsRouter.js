const express = require("express");
const actionsDb = require("../helpers/actionModel");
const projectsDb = require("../helpers/projectModel");
const router = express.Router();

// GETS PROJECTS LIST - ALL
router.get("/", (req, res) => {
  projectsDb.get()
    .then((response) => {
      // console.log('all projects', projects)
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: "not working", error: error });
    });
});

// GETS PROJECT FROM LIST BY ID
router.get("/:id", validateProjectId, (req, res, next) => {
  projectsDb.get(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: "not working", error: error });
    });
});

// GETS PROJECT'S ACTIONS BY ID
router.get("/:id/actions", (req, res) => {
  projectsDb.getProjectActions(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: "not working", error: error });
    });
});

// POST NEW PROJECT TO LIST
router.post("/", (req, res) => {
  projectsDb.insert(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json({ message: "not working", error: error });
    });
});

// UPDATES PROJECTS BY ID
router.put("/:id", (req, res) => {
  projectsDb.update(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "project updated successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "not working", error: error });
    });
});

// deletes projects by ID
router.delete("/:id", (req, res) => {
  projectsDb.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "project was deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "not working", error: error });
    });
});

// custom middleware

// function validateProjectId(req, res, next) {
//   console.log("middleware hit!");
//   next();
// }

function validateProjectId(req, res, next) {
  projectsDb.get(req.params.id)
    .then(next())
    .catch((error) => res.status(400).json({ message: "not working", error: error }));
};

module.exports = router;
