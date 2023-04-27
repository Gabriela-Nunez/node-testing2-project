const books = [
  {book_title: 'The Alchemist' },
  {book_title: 'The Great Gatsby' },
  {book_title: 'To Kill a Mockingbird'},
  {book_title: 'One Hundred Years of Solitude' },
  {book_title: 'The Catcher in the Rye' }
]

exports.books = books

exports.seed = function (knex) {
  return knex('books').insert(books)
}