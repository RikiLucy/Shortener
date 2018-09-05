'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    image: DataTypes.STRING,
    url_id: DataTypes.INTEGER,
    visitor_id: DataTypes.INTEGER
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
  };
  return Images;
};