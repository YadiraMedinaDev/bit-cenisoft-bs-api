const mongoose = require('mongoose')

const Book = mongoose.model('books', { cover: String, name: String, description: String, unitValue: Number, categories: [String] })

module.exports = Book