'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.belongsTo(models.Product)
    }
  }
  Order.init({
    amount: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    hooks : {
      beforeCreate(instance, option){
        instance.quantity = 1
        instance.amount = 1
      }
    },
    sequelize,
    modelName: 'Order',
  });
  return Order;
};