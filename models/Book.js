const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  title: String,
  author: [],
  description: String,
  image: String,
  link: String,
})
const Book = mongoose.model('Book', bookSchema)

module.exports = Book
