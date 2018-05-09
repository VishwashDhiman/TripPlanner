const express = require('express');
const Tour = require('../models/tour');
const Train = require('../models/train');
const router = express.Router();
const Login = require('../models/login');

// get request for Flights
router.get('/tours', function (req, res) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  let id = req.query.id;
  Tour.find({ id }, function (err, name) {
    if (err) {
      console.log("Get the error" + err);
      throw err;
    }
    else {
      res.send(name);
    }
  })
});

//Get Request for Trains
router.get('/train', function (req, res) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  let id = req.query.id;
  console.log(id);
  Train.find({ id }, function (err, name) {
    if (err) {
      throw err;
    }
    else {
      res.send(name);
    }
  });
});

//Post request for Trains
router.post('/train', function (req, res, next) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  Train.create(req.body).then(function (train) {
    res.send(train);
  }).catch(next);
});

router.post('/tours', function (req, res, next) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  Tour.create(req.body).then(function (tour) {
    res.send(tour);
  }).catch(next);
});

//Post requset for Login
router.post('/signup', function (req, res, next) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  let obj = [];
  Login.findOne({ 'email': req.body.email }).then(function (data) {
    if (data == null) {
      Login.create(req.body).then(function (data) {
        obj = [{ 'id': data._id }, { 'name': data.email }];
        res.send(obj);
      }).catch(next);
    }
    else {
      res.send(null);
    }
  });
});

router.post('/login', function (req, res, next) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  let obj = [];
  Login.findOne(req.body).then(function (data) {
    obj = [{ 'id': data._id }, { 'name': data.email }];
    res.send(obj);
  }).catch(next);
});

router.get('/login', function (req, res) {
  res.set({'Content-type':'application/json',
  'Access-Control-Allow-Origin':'http://localhost:4200'});
  let id = req.query.id;
  Login.find({ id }, function (err, name) {
    if (err) {
      throw err;
    }
    else {
      res.send(name.email);
    } 
  })
});

module.exports = router;
