require('dotenv').config();

const env = {
  port: process.env.PORT || 3000,
  rabbitmqURI: process.env.RABBITMQ_URI,
  email: {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.SMTP_USERNAME,
  },
};

module.exports = env;
