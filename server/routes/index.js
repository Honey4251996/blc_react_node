var express = require('express');
var router = express.Router();

var controller = require('../controllers/blcController')

// Test API
router.get('/', function (req, res, next) {
  res.send("API is working properly");
});

// Single page BLC API
router.post('/page-blc', async function (req, res, next) {
  var url = req.body.url;
  controller.singlePageBLC(url)
    .then((result) => {
      res.json({ result })
    })
    .catch((err) => {
      console.log('Error in Page BLC >>>', err);
    });
});

// Whole websit BLC API
router.post('/website-blc', function (req, res, next) {
  var url = req.body.url;
  controller.websiteBLC(url)
    .then((result) => {
      res.json({ result })
    })
    .catch((err) => {
      console.log('Error in Website BLC >>>', err);
    });
});


module.exports = router;
