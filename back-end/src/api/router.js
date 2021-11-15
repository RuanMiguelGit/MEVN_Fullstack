const express = require('express');

const appController = require('../controller/appController');

const appRouter = express.Router();

appRouter.get('/', appController.test);

module.exports = {
appRouter
};