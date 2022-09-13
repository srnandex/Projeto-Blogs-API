const routerUser = require('express').Router();
const controllerUser = require('../controllers/user');
const valUser = require('../middlewares/userVal');
const tokenVal = require('../middlewares/tokenVal');

routerUser.post('/', valUser, controllerUser.create);
routerUser.get('/', tokenVal, controllerUser.findAll);
routerUser.get('/:id', tokenVal, controllerUser.findByPk);

module.exports = routerUser;
