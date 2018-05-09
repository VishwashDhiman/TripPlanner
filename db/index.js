const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Set up express app
const app = express();

app.use('/home',express.static('static'));
app.use('',express.static('static'));
// //Connect to mongodb
mongoose.connect('mongodb://localhost/tourism');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//Listning to app
app.use('/api', require('./routes/api'));

//Error handling
app.use(function (err, req, res, next) {
  res.status(442).send({ error: err.message });
});
app.listen(process.env.port || 4000, function () {
  console.log("Listning to requests");
});
