const Category = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          name: {
            type: DataTypes.STRING,
          },
    }, {
        timestamps: false,
    });
  
    return Category;
  };
  
  module.exports = Category;