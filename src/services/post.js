const { User, BlogPost, Category } = require('../database/models');

const create = async () => {
    // const veridupliemail = await User.findOne({ where: { email } });
    // if (veridupliemail) { return 'xablau'; }
    // await User.create({ displayName, email, password, image });
    // const token = jwt.sign({ data: email }, JWT_SECRET, { expiresIn: '1d', algorithm: 'HS256' });
    // return { token };
};

const findAll = async () => {
    const allPosts = await BlogPost.findAll({ 
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ] });
    return allPosts;
};

const findByPk = async (id) => {
    const postById = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ] });

    if (!postById) return 'xablau';

    return postById;
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