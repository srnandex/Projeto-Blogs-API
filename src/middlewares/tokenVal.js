const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const tokenVal = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    try {
      const veriTok = jwt.verify(authorization, JWT_SECRET);
      req.user = veriTok;
      console.log('estou no tokenVaaaaallll');
      return next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = tokenVal;