var express = require('express');
var router = express.Router();

var kitten = require('../models/kitten');
var kittenModel = new kitten();

router.post('/', function (req, res, next) {
  var { name } = req.body;
  console.log(req.body);

  kittenModel.name = name;

  kittenModel
    .save()
    .then(newKitten => {
      console.log('Save [' + name + ']');
      res.status(200).json({
        message: 'Success',
        data: {
          kitten: newKitten
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

router.get('/', function (req, res, next) {
  kitten
    .find()
    .then(kittens => {
      res.status(200).json({
        message: "Success",
        data: {
          kitten: kittens
        }
      });
    }).catch(err => {
      res.status(500).json({
        message: err
      });
    });
});

module.exports = router;