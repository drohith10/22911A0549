const express = require('express');
const AnalyticsController = require('../controllers/analyticsController');

const router = express.Router();
const analyticsController = new AnalyticsController();

function setRoutes(app) {
    router.get('/top-accounts', analyticsController.getTopAccounts.bind(analyticsController));
    app.use('/api/analytics', router);
}

module.exports = setRoutes;