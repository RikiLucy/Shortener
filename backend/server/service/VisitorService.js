const models = require('../models');

const createVisitor = async (data) => {
  try {
    const { Visitors } = await models;
    return await Visitors.create(data)
  } catch (error) {
    throw error
  }
};

const getVisitors = async (code) => {
  try {
    const { Urls } = await models;
    let url = await Urls.findOne({
      where: {
        code,
      },
      include: [
        'url_visitors',
      ],
    });
    
    return url;
  } catch (error) {
    throw error
  }
};


const getUniqueVisitors = async (code) => {
  try {
    const { Urls, Visitors } = await models;
    console.log('tut');
    let url = await Urls.findOne({
      where: {
        code,
      },
    });
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 14);
    const endDate = new Date();
  
    const uniqueVisitors = await Visitors.count({
      where: {
        url_id: url.id,
        createdAt: {
          $between: [startDate, endDate],
        }
      },
      distinct: true,
      col: 'ip',
    });
    
    return uniqueVisitors;
  } catch (error) {
    throw error
  }
};


module.exports = {
  createVisitor,
  getVisitors,
  getUniqueVisitors,
};
