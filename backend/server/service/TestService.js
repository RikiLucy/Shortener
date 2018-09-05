const models = require('../models');

const createTest = async ({ title }) => {
  try {
    const { Test } = await models;
    return await Test.create({ title })
  } catch (error) {
    throw error
  }
};

module.exports = {
  createTest,
};
