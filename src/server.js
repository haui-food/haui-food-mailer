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

app.listen(env.port, () => {
  console.log(`Service running on port ${env.port}`);
});
