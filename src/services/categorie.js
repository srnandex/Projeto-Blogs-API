const { Category } = require('../database/models');

const create = async ({ name }) => {
    if (!name) { return 'xablau'; }
    const categorie = await Category.create({ name });
    return categorie;
};

const findAll = async () => {
    const allCategorys = await Category.findAll();
    return allCategorys;
};

module.exports = {
    create,
    findAll,
};