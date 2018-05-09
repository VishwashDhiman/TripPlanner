const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Craete ninja Schema & model

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
  //Add geo Location
});


const Tour = mongoose.model('tour', TourSchema);
// const Train = mongoose.model('train',TrainSchema);

module.exports = Tour;
// module.exports = Train;
