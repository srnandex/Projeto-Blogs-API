const routerPost = require('express').Router();
const controllerPost = require('../controllers/post');
const tokenVal = require('../middlewares/tokenVal');
const postVal = require('../middlewares/postVal');

// routerPost.post('/', tokenVal, controllerPost.create);
routerPost.get('/', tokenVal, controllerPost.findAll);
routerPost.get('/:id', tokenVal, controllerPost.findByPk);
routerPost.put('/:id', tokenVal, postVal, controllerPost.update);
routerPost.delete('/:id', tokenVal, postVal, controllerPost.destroy);
module.exports = routerPost;
