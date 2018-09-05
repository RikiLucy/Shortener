const testHandler = require('./TestHandler');
const urlHandler = require('./UrlHandler');
const visitorsHandler = require('./VisitorsHandler');

module.exports = {
  ...testHandler,
  ...urlHandler,
  ...visitorsHandler,
};
