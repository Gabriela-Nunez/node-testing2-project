exports.up = function (knex) {
  return knex.schema
  .createTable('books', table => {
    table.increments('book_id').primary()
    table.text('book_title', 128)
    table.text('author_name', 128)
    .unique()
    .notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('books')
}
