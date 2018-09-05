const models = require('../models');

const createImage = async (data) => {
  try {
    const { Images } = await models;
    return await Images.create(data)
  } catch (error) {
    throw error
  }
};

module.exports = {
  createImage,
};
