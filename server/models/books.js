const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required: true},
  date: { type: Date, default: Date.now },
  image: {type: String, required: false},
  link: {type: String, require: true},
  date: { Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;




