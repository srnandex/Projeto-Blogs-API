const routerPost = require('express').Router();
const controllerPost = require('../controllers/post');
const tokenVal = require('../middlewares/tokenVal');

// routerPost.post('/', tokenVal, controllerPost.create);
routerPost.get('/', tokenVal, controllerPost.findAll);

module.exports = routerPost;
