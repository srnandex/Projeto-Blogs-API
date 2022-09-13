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

const findAll = async () => {};

const findByPk = async (_id) => {};

const destroy = async () => {};

module.exports = {
    create,
    findAll,
    findByPk,
    destroy,
};