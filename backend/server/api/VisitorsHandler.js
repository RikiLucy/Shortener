const randomString = require('randomstring');
const ip = require('ip');
const { createUrl, getUrl, createVisitor, getVisitors, getUniqueVisitors } = require('../service');

const getVisitorsHandler = async (req, res) => {
  try {
    const { code } = req.query;
    
    const visitors = await getVisitors(code);
    
    return res.status(200).json(visitors);
  } catch (error) {
    return res.status(500);
  }
};

const getUniqueVisitorsHandler = async (req, res) => {
  try {
    const { code } = req.query;
    
    const visitors = await getUniqueVisitors(code);
    
    return res.status(200).json(visitors);
  } catch (error) {
    return res.status(500);
  }
};

module.exports = {
  getVisitorsHandler,
  getUniqueVisitorsHandler,
};
