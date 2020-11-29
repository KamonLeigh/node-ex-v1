const express = require('express');
const ExpressError = require('../util/ExpressError');

const router = new express.Router();

router.all('/*', (req, res, next) => {
  next(new ExpressError('page not found', 404));
});

module.exports = router;
