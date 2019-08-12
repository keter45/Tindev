const express = require("express");
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/dev', DevController.index);
routes.post('/dev', DevController.store);

routes.post('/dev/:devId/like', LikeController.store)
routes.post('/dev/:devId/dislike', DislikeController.store)

module.exports = routes;