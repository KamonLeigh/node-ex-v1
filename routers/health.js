const express = require('express');

const router = new express.Router();

router.get('/_health', (req, res) => {
  res.status(200).send('ok');
});

module.exports = router;
