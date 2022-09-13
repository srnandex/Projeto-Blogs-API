const routerUser = require('express').Router();
const controllerUser = require('../controllers/user');
const valUser = require('../middlewares/userVal');

routerUser.post('/', valUser, controllerUser);

module.exports = routerUser;
