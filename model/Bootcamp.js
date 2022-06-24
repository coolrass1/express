const mongoose = require('mongoose');
const { Schema } = mongoose;

const bootSchema = new Schema({
  title: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  author: String,
  body: String,
  //   comments: [{ body: String, date: Date }],
  //   date: { type: Date, default: Date.now },
  //   hidden: Boolean,
  //   meta: {
  //     votes: Number,
  //     favs:  Number
  //   }
});

module.exports = mongoose.model('Bootcamp', bootSchema);
