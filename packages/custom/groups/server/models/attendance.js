'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Schema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  attendance: {
    type: Schema.ObjectId,
    ref: 'Attendance'
  },
  status: {
    type: String
  },
  participant: {
    type: Schema.ObjectId,
    ref: 'Participant'
  }
});

Schema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('Attendance', 'participant').populate('participant', 'nombre email').exec(cb);
};

mongoose.model('Attendance', Schema);
