const joi = require('joi');

const schemaUser = joi.object({ 
    displayName: joi.string().min(8).required(), 
    email: joi.string().email().required(), 
    password: joi.string().min(6).required(), 
    image: joi.string(),
});

const valUser = async (req, res, next) => {
    const { error } = schemaUser.validate(req.body);
    if (error) { return res.status(400).json({ message: error.details[0].message }); }
    return next();
};

module.exports = valUser;