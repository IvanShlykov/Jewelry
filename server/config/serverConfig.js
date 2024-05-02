const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const fileUpload = require('express-fileupload');


const verifyAccessToken = require('../middleware/verify');

const serverConfig = (app) => {
  app.use(fileUpload());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));

  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(verifyAccessToken);
};

module.exports = serverConfig;
