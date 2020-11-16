// models/kitten.js

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const kittySchema = new mongoose.Schema({ name: String });
const kitten = mongoose.model('kitten', kittySchema);

module.exports = kitten;