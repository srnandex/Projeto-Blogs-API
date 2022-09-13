const serviceLogin = require('../services/login');

const controllerLogin = async (req, res) => {
    const { email, password } = req.body;

    const token = await serviceLogin(email, password);

    console.log(token);

    if (token === 'xablau') {
        return res.status(400).json({
            message: 'Invalid fields',
          });    
    }
    
    return res.status(200).json(token);
};

module.exports = controllerLogin;