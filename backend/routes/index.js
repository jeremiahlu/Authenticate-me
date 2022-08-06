const express = require('express');
const app = require('../app');
const router = express.Router();

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });

  console.log(res.json(req.body))
});

const apiRouter = require('./api');

router.use('/api', apiRouter);

module.exports = router;