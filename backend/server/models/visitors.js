'use strict';
module.exports = (sequelize, DataTypes) => {
  const Visitors = sequelize.define('Visitors', {
    url_id: DataTypes.INTEGER,
    ip: DataTypes.STRING
  }, {});
  Visitors.associate = function(models) {
    // associations can be defined here
  };
  return Visitors;
};