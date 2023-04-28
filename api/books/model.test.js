const Book = require('./model')
const db = require('../../db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

test('enviorment is testing', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('getBooks', () => {
  it('should return all books from the database', async () => {
    const expected = await db('books');
    const actual = await Book.getBooks();
    expect(actual).toEqual(expected);
  });
});

describe('findBookById', () => {
  it('should return the correct book given a valid ID', async () => {
    const book_id = 1;
    const expected = await db('books')
      .where('book_id', book_id)
      .first();
    const actual = await Book.findBookById(book_id);
    expect(actual).toEqual(expected);
  });

});