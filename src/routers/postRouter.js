const routerPost = require('express').Router();
const controllerPost = require('../controllers/post');
const tokenVal = require('../middlewares/tokenVal');
const valpost = require('../middlewares/postVal');
const veriCreatePost = require('../middlewares/postCreateVal');

routerPost.post('/', tokenVal, veriCreatePost, controllerPost.create);
routerPost.get('/', tokenVal, controllerPost.findAll);
routerPost.get('/:id', tokenVal, controllerPost.findByPk);
routerPost.put('/:id', tokenVal, valpost, controllerPost.update);
routerPost.delete('/:id', tokenVal, valpost, controllerPost.destroy);

module.exports = routerPost;
