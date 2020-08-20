var express = require('express');
var router = express.Router();

var controller = require('../controllers/blcController')

var singlePageCheckingFlag = false;
var websiteCheckingFlag = false;

// Test API
router.get('/', function (req, res, next) {
  res.send("API is working properly");
});

// BLC
router.post('/blc', setConnectionTimeout(36000000), async function (req, res, next) {
  var { url, type } = req.body;

  if (type === '1') { // whole website blc
    if (!websiteCheckingFlag) {
      websiteCheckingFlag = true;
      controller.websiteBLC(url)
        .then((result) => {
          websiteCheckingFlag = false;
          res.json({ result })
        })
        .catch((err) => {
          console.log('Error in Website BLC >>>', err);
        });
    } else {
      console.log("website still checking...");
    }
  }

  if (type === '2') { // single webpage
    if (!singlePageCheckingFlag) {
      singlePageCheckingFlag = true;
      controller.singlePageBLC(url)
        .then((result) => {
          singlePageCheckingFlag = false;
          res.json({ result })
        })
        .catch((err) => {
          console.log('Error in Page BLC >>>', err);
        });
    } else {
      console.log('single page still checking');
    }

  }

});

function setConnectionTimeout(time) {
  return function (req, res, next) {
    res.connection.setTimeout(time);
    next();
  }
}

module.exports = router;
