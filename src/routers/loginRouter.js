const routerLo = require('express').Router();
const controllerLogin = require('../controllers/login');
const loginVal = require('../middlewares/loginVal');

routerLo.post('/', loginVal, controllerLogin);

module.exports = routerLo;
