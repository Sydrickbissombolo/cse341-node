const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.newtonRoute);
routes.get('/jolina', lesson1Controller.jolinaRoute);
routes.get('/thecia', lesson1Controller.theciaRoute);

module.exports = routes;