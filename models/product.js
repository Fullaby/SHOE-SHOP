'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order)
      this.belongsTo(models.Category)
    }
  }
  Product.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Name Required"
        }
      } 
      },
    size: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : "Size Required"
        }
      }  
      },
    color: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Color Required"
        }
      }  
      },
    price: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : "price Required"
        }
      }  
      },
    stock: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : "Stock Required"
        }
      } 
      },
    imagePath: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Image Required"
        }
      } 
      },
    CategoryId: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : "Category Required"
        }
      }  
      }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};