const express = require('express');

const appController = require('../Controller/appController');

const appRouter = express.Router();

appRouter.get('/', appController.test);

module.exports = {
appRouter
};