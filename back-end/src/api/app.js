const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const {
  appRouter,

} = require('./router');

app.use(bodyParser.json());
app.use(cors());

app.use(appRouter);


module.exports = app;