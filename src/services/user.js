const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const create = async ({ displayName, email, password, image }) => {
    const veridupliemail = await User.findOne({ where: { email } });
    if (veridupliemail) { return 'xablau'; }
    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ data: email }, JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' });
    return { token };
};

const findAll = async () => {
    const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
    return allUsers;
};

const findByPk = async (id) => {
    const userbyid = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!userbyid) return 'xablau';

    return userbyid;
};

const destroy = async (id) => {
    await User.destroy({ where: { id } });
};

module.exports = {
    create,
    findAll,
    findByPk,
    destroy,
};