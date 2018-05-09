const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainSchema = new Schema({
    id:{
      type: String,
      required:[true]
    },
    from: {
      type: String
    },
    trainName:{
      type:String
    },
    departureTime:{
      type:String
    },
   
    arrivalTime:{
      type:String 
    },
    duration:{
      type:String
    },
    number:{
      type:String
    }
  });

  const Train = mongoose.model('train',TrainSchema);
  module.exports = Train;