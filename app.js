const express = require('express');
const expressMongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const testRouter = require('./routers/health');
const wildCard = require('./routers/wildCard');

const app = express();

// middleware logger for node.
app.use(morgan('common'));

// set headers in node app by default client is unable to tell that a node/express is running.
app.use(helmet());
app.use(cookieParser());

// prevents client sending script to run in db
app.use(expressMongoSanitize());
app.use(express.json());

app.use(testRouter);
app.use(wildCard);

app.use((err, req, res, next) => {
  const { message = 'oops something is really, really wrong!!', statusCode = 500 } = err;
  res.status(statusCode).send(message);
});

module.exports = app;
