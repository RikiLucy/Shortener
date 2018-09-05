const testService = require('./TestService');
const urlService = require('./UrlService');
const visitorService = require('./VisitorService');
const imageService = require('./ImageService');

module.exports = {
  ...testService,
  ...urlService,
  ...visitorService,
  ...imageService,
};
