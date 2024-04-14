const express = require('express');
const httpStatus = require('http-status');

const { mailService } = require('../services');

const baseRoute = express.Router();

baseRoute.get('/ping', (req, res) => {
  res.send({
    code: httpStatus.OK,
    message: 'Service mailer is running',
  });
});

baseRoute.post('/send-mail', async (req, res) => {
  const { emailData, type } = req.body;
  await mailService.sendEmailWithTemplate(emailData, type);
  res.send({
    code: httpStatus.OK,
    message: 'Send mail success',
  });
});

baseRoute.all('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND).send({
    code: httpStatus.NOT_FOUND,
    message: 'Not found',
  });
});

module.exports = baseRoute;
