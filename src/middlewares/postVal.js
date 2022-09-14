const servicePost = require('../services/post');

const valPost = async (req, res, next) => {
    const idReq = req.user.data.id;
    const idParam = req.params.id;

    const veriTokenPost = await servicePost.findByPk(idParam);
    console.log(veriTokenPost);
    if (veriTokenPost === 'xablau') { 
        return res.status(404).json({ message: 'Post does not exist' }); 
    }
    if (idReq !== veriTokenPost.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    return next();
};

module.exports = valPost;