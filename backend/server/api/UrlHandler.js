const randomString = require('randomstring');
const fs = require('fs');
const ip = require('ip');
const { createUrl, getUrl, createVisitor, createImage } = require('../service');

const createUrlHandler = async (req, res) => {
  try {
    let {
      code = null,
      url = null,
      is_commercial = false,
      end_date = null,
      is_delete = false,
    } = req.body;
    
    if (!code) {
      code = randomString.generate(7);
    }
    
    const newUrl = await createUrl({
      code, url, is_commercial, end_date, is_delete,
    });
  
    return res.status(200).json(newUrl);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const getUrlHandler = async (req, res) => {
  try {
    const { code } = req.query;
    console.log('getHandler', req.query.code);
    
    const url = await getUrl(code);
    
    const newVisitor = await createVisitor({
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      url_id: url.id,
    });
    
    let randomImage;
    if (url.is_commercial) {
      const images = fs.readdirSync('./images');
      randomImage = images[Math.floor(Math.random() * images.length)];
      const newImage = await createImage({
        image: randomImage,
        url_id: url.id,
        visitor_id: newVisitor.id,
      })
    } else {
      randomImage = false;
    }
    
    return res.status(200).json({ url, randomImage });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  createUrlHandler,
  getUrlHandler,
};
