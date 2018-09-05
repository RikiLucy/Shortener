const models = require('../models');

const createUrl = async (data) => {
  try {
    const { Urls } = await models;
    const result = await Urls.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

const getUrl = async (code) => {
  try {
    const { Urls } = await models;
    let url = await Urls.findOne({
      where: {
        code,
        $or: [
          {
            end_date: {
              $gt: new Date(),
            }
          },
          {
            end_date: {
              $eq: null,
            }
          }
        ],
      }
    });
    
    return url;
  } catch (error) {
    throw error
  }
};

module.exports = {
  createUrl,
  getUrl
};
