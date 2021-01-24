const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  title: String,
  author: [],
  description: String,
  image: String,
  link: String,
})
const Book = mongoose.model('book', messageSchema)

module.exports = Book
