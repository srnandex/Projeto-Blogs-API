const { BlogPost, PostCategory, Category, User } = require('../database/models');

const create = async ({ title, content, categoryIds, userId }) => {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
    if (count < categoryIds.length) {
        return 'xablau';
    }
    const { dataValues } = await BlogPost.create(
      { title, content, userId },
    );
    const mapCategory = categoryIds.map((ev) => ({
      postId: dataValues.id, categoryId: ev,
    }));
    await PostCategory.bulkCreate(mapCategory);

  return dataValues;
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

const update = async (id, up) => {
    await BlogPost.update(up, { where: { id } });
    const result = await findByPk(id);
    return result;
};

const destroy = async (id) => {
    await findByPk(id);
    // if (result === 'xablau') return 'xablau';
    await BlogPost.destroy({ where: { id } });
};

module.exports = {
    create,
    findAll,
    findByPk,
    destroy,
    update,
};