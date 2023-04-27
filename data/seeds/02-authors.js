const authors = [
  {author_name: 'Paulo Coelho' },
  {author_name: 'F. Scott Fitzgerald' },
  {author_name: 'Harper Lee' },
  {author_name: 'Gabriel Garcia Marquez' },
  {author_name: 'J.D. Salinger' },
]

exports.authors = authors

exports.seed = function (knex) {
  return knex('authors').insert(authors)
}