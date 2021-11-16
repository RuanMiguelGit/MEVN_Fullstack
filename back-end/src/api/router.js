const express = require('express');

const ordersController = require('../controller/orders');

const orderRouter = express.Router();

orderRouter.get('/', ordersController.findAllOrders);

module.exports = {
orderRouter
};