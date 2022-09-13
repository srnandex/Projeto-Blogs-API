const serviceCategorie = require('../services/categorie');

const create = async (req, res) => {
    const category = await serviceCategorie.create(req.body);
    if (category === 'xablau') {
        return res.status(400).json({
            message: '"name" is required',
          });
    }
    return res.status(201).json(category);
};

const findAll = async (_req, res) => {
    const allUsers = await serviceCategorie.findAll();
    return res.status(200).json(allUsers);
};

module.exports = {
    create,
    findAll,
};