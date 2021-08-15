const express = require('express');
const server = express();

const actionsRouter = require('../actions/actions-router');
const projectsRouter = require('./projects/projects-router');
const actionsMiddleware = require('../actions/actions-middleware');
const projectMiddleware = require('../projects/projects-middleware');


server.use(express.json());
server.use('./api/actions', actionsRouter)
server.use('./api/projects', projectsRouter)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.get('/', (req, res) => {
    res.send(`
    <h2>Actions API</h2>
    <p>Welcome!</p>
    `)
});

module.exports = server;
