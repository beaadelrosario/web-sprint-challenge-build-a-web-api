const express = require('express');
const actionsDb = require("../helpers/actionModel");
const projectsDb = require("../helpers/projectModel");
const router = express.Router();

// router.get('/', (req, res) => {
//   actionsDb.get()
//     .then((response) => {
//       res.status(200).json(response);
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "actions list retrieval not working", error: error });
//     });
// });

// // DOESNT WORK.........!!!!!!!!!!!!
// router.post('/:id', validateActionId, (req, res) => {
//   req.body.project_id = req.params.id

//   if (req.body.description && req.body.notes){
//     actionDb.insert(req.body)
//     .then((response) => {
//       res.status(200).json({ data: response })
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "not working", error: error });
//     });
//   } else {
//     res.status(400).json({ message: "something missing" })
//   }
// });

// router.delete('/:id', validateActionId, (req, res) => {
//   const id = Number(req.params.id);

//   actionsDb.remove(id)
//     .then((response) => {
//       res.status(200).json({ message: "success" });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "not working", error: error });
//     });
// });

// router.put('/:id',validateActionId, (req, res) => {
//   const id = Number(req.params.id);

//   actionsDb.update(id)
//     .then(() => {
//       res.status(200).json({ message: "success" });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "not working", error: error });
//     });
// });

// // CUSTOM MIDDLEWARE
// function validateActionId(req, res, next) {
//   projectsDb.get(req.params.id)
//     .then(next())
//     .catch((error) => res.status(400).json({ message: "not working", error: error }));
// };

// module.exports = router;



router.post('/', (req, res) => {
  actionsDb.insert(req.body)
      .then((response) => {
          res.status(201).json({response})
      })
      .catch((error) => {
        res.status(500).json({ message: "not working", error: error });
      });
});

router.get('/:id', (req, res) => {
  projectsDb.getProjectActions(req.params.id)
      .then((response) => {
          res.status(200).json({response})
      })
      .catch((error) => {
        res.status(500).json({ message: "not working", error: error });
      });
});

router.put('/:id', (req, res) => {
  actionsDb.update(req.params.id, req.body)
      .then((response) => {
          res.status(201).json({response})
      })
      .catch((error) => {
        res.status(500).json({ message: "not working", error: error });
      });
});

router.delete('/:id', (req, res) => {
  actionsDb.remove(req.params.id)
      .then((response) => {
          res.status(200).json({response})
      })
      .catch((error) => {
        res.status(500).json({ message: "not working", error: error });
      });
});

//Custom Middleware

module.exports = router;