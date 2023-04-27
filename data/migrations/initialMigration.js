exports.up = function (knex) {
  return knex.schema
  .createTable('books', table => {
    table.increments('book_id');
    table.text('book_name', 128)
    .unique()
    .notNullable()
  })
  .createTable('authors', table => {
    table.increments('author_id');
    table.text('author_name', 128)
    .unique()
    .notNullable()
    table.integer('book_id')
    .unsigned()
    .notNullable()
    .references('book_id')
    .inTable('books')
    .onUpdate('RESTRICT')
    .onDelete('RESTRICT') 
  })
}

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('authors')
  .dropTableIfExists('books')
}
