const servicePost = require('../services/post');

// const create = async (req, res) => {
//     const category = await serviceCategorie.create(req.body);
//     if (category === 'xablau') {
//         return res.status(400).json({
//             message: '"name" is required',
//           });
//     }
//     return res.status(201).json(category);
// };

const findAll = async (_req, res) => {
    const allPosts = await servicePost.findAll();
    return res.status(200).json(allPosts);
};

const findByPk = async (req, res) => {
    const { id } = req.params;
    const postbyid = await servicePost.findByPk(id);
    if (postbyid === 'xablau') {
        return res.status(404).json({
            message: 'Post does not exist',
          });
    }
    return res.status(200).json(postbyid);
};

const update = async (req, res) => {
    const { id } = req.params;
    if (!req.body.content || !req.body.title) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const postbyid = await servicePost.update(id, req.body);
    return res.status(200).json(postbyid);
};

const destroy = async (req, res) => {
    const des = await servicePost.destroy(req.params.id);
    if (des === 'xablau') {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(204).end();
};

module.exports = {
    // create,
    findAll,
    findByPk,
    update,
    destroy,
};