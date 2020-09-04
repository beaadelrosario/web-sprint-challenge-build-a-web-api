const express = require('express');
const projectsRouter = require('./data/helpers/projectsRouter');
const actionsRouter = require('./data/helpers/actionsRouter');

const server = express();
server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] a ${req.method} to ${req.url})}`
  );
  next();
}
// Then add it as the first middleware in the queue. server.use(logger); ABOVE

module.exports = server;
