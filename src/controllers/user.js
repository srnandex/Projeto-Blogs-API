const serviceUser = require('../services/user');

const create = async (req, res) => {
    const token = await serviceUser.create(req.body);
    if (token === 'xablau') {
        return res.status(409).json({
            message: 'User already registered',
          });
    }
    return res.status(201).json(token);
};

const findAll = async (_req, res) => {
    const allUsers = await serviceUser.findAll();
    return res.status(200).json(allUsers);
};

const findByPk = async (req, res) => {
    const { id } = req.params;
    const userbyid = await serviceUser.findByPk(id);
    if (userbyid === 'xablau') {
        return res.status(404).json({
            message: 'User does not exist',
          });
    }
    return res.status(200).json(userbyid);
};

const destroy = async (req, res) => {
    console.log(req);
    await serviceUser.destroy(req.user.data.id);
    return res.status(204).end();
};

module.exports = {
    create,
    findAll,
    findByPk,
    destroy,
};