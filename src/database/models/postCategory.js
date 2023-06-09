const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define("PostCategory", {
        postId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            foreignKey: true,
          },
          categoryId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            foreignKey: true,
          }
    }, {
        timestamps: false,
    });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, 
            { foreignKey: 'postId', 
              as: 'categories',
              through: PostCategory,
              otherKey: 'categoryId' });
        models.Category.belongsToMany(models.BlogPost, 
        { foreignKey: 'categoryId', 
            as: 'BlogPost',
            through: PostCategory,
            otherKey: 'postId' });      
    }
  
    return PostCategory;
  };
  
  module.exports = PostCategory;