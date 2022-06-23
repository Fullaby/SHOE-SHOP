'use strict';

const sequelize = require("sequelize");

module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn('Profiles','UserId',{
      type: sequelize.INTEGER,
      references:{
        model: 'Users',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }
    })
  },

   down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn('Profiles','UserId')
  }
};
