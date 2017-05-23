var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
  content: {type: String, required: true},
  user: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

var Message = mongoose.model('Message', schema);
module.exports = { Message }
