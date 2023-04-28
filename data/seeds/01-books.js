const books = [
  {book_title: 'The Alchemist', author_name: 'Paulo Coelho' },
  {book_title: 'The Great Gatsby', author_name: 'F. Scott Fitzgerald' },
  {book_title: 'To Kill a Mockingbird', author_name: 'Harper Lee' },
  {book_title: 'One Hundred Years of Solitude', author_name: 'Gabriel Garcia Marquez' },
  {book_title: 'The Catcher in the Rye', author_name: 'J.D. Salinger' }
]

exports.books = books

exports.seed = function (knex) {
  return knex('books').insert(books)
}