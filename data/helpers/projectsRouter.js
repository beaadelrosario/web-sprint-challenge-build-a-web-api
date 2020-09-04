const express = require("express");
const projectsDb = require("./projectModel");
const actionsDb = require("./actionModel");
const router = express.Router();

// GETS PROJECTS LIST - ALL
router.get("/", (req, res) => {
    projectsDb.get()
        .then((projects) => {
        // console.log('all projects', projects)
        res.status(200).json(projects);
        })
        .catch((error) => {
        res.status(500).json({ message: "not working", error: error });
    });
});

// GETS PROJECT FROM LIST BY ID
// router.get("/:id", (req,res) => {
//     projectsDb.get(project)
//         .then((response) => {
//             console.log('one project?', response)
//             res.status(200).json({ project: response });
//         })
//         .catch((error) => {
//             res.status(500).json({ message: "project by id not found", error: error });
//         });
// });

// router.get("/:id", (req, res) => {
//     res.status(200).json({ project: req });
//   });
  
// GETS PROJECT'S ACTIONS BY ID
router.get("/:id/actions", (req, res) => {
    projectsDb.getProjectActions(req.params.id)
        .then((projects) => {
        res.status(200).json(projects);
        })
        .catch((error) => {
        res.status(500).json({ message: "not working", error: error });
    });
});

// POST NEW PROJECT TO LIST
router.post("/", (req, res) => {
    projectsDb.insert(req.body)
    .then((project) => {
        res.status(201).json(project);
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

module.exports = router;
