const db = require('../../db-config')

function getBooks() {
  return db('books');
}

function findBookById(book_id) {
  return db('books')
  .where('book_id', book_id)
  .first()
}

module.exports = {
  getBooks,
  findBookById
}