const routerCat = require('express').Router();
const controllerCategorie = require('../controllers/categorie');
const tokenVal = require('../middlewares/tokenVal');

routerCat.post('/', tokenVal, controllerCategorie.create);
routerCat.get('/', tokenVal, controllerCategorie.findAll);

module.exports = routerCat;
