const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const serviceLogin = async (email, pass) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.email !== email || user.password !== pass) {
        return 'xablau';
    }

    const token = jwt.sign({ data: 
        { email, id: user.dataValues.id } }, JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' });
    // console.log(token);
    return { token };
};

module.exports = serviceLogin;