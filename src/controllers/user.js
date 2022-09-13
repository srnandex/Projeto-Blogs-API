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

module.exports = create;