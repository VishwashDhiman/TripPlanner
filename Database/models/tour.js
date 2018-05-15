const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Craete Flight Schema & model

const TourSchema = new Schema({
  id: {
    type: String
  },
  airline: {
    type: String 
  },
  flight: {
    type: String
  },
  fare: {
    type: Number
  },
  departureTime: {
    type: String
  },
  duration: {
    type: String
  }
});


const Tour = mongoose.model('tour', TourSchema);
module.exports = Tour;
