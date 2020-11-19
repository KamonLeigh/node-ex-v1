const express = require('express');
const expressMongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const morgan = require('morgan');
const testRouter = require('./routers/health');

const app = express();

// middleware logger for node.
app.use(morgan('common'));

// set headers in node app by default client is unable to tell that a node/express is running.
app.use(helmet());

// prevents client sending script to run in db
app.use(expressMongoSanitize());
app.use(express.json());

app.use(testRouter);

module.exports = app;
