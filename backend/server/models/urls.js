'use strict';
module.exports = (sequelize, DataTypes) => {
  const Urls = sequelize.define('Urls', {
    code: DataTypes.STRING,
    url: DataTypes.STRING,
    is_commercial: DataTypes.BOOLEAN,
    end_date: DataTypes.DATE,
    is_delete: DataTypes.BOOLEAN
  }, {});
  Urls.associate = function(models) {
    // associations can be defined here
    Urls.hasMany(models.Visitors, {
      foreignKey: 'url_id',
      as: 'url_visitors',
    });
  };
  return Urls;
};
