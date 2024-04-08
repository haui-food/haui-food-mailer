const express = require('express');
const httpStatus = require('http-status');

const { env } = require('./config');

const app = express();

app.get('/ping', (req, res) => {
  res.send({
    code: httpStatus.OK,
    message: 'Service mailer is running',
  });
});

app.all('*', (req, res) => {
  res.status(httpStatus.NOT_FOUND).send({
    code: httpStatus.NOT_FOUND,
    message: 'Not found',
  });
});

app.listen(env.port, () => {
  console.log(`Service running on port ${env.port}`);
});
