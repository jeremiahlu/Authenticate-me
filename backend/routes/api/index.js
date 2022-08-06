const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json('anything')
})


router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router 