const express = require('express');
const API = require('../api');

const router = express.Router();

// Url
router.post('/test', API.createTestHandler);

router.post('/url', API.createUrlHandler);
router.get('/url', API.getUrlHandler);
router.get('/visitors', API.getVisitorsHandler);
router.get('/unique_visitors', API.getUniqueVisitorsHandler);

module.exports = router;
