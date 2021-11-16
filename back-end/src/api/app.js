const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {
  orderRouter,

} = require('./router');

app.use(bodyParser.json());
app.use(cors());

app.use(orderRouter);


module.exports = app;