const db = require('../../db-config')
const request = require('supertest')
const server = require('../books/router')
const Book = require('../books/model')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

// describe('[GET] /books', () => {
//   test('responds with a 200 ok', async () => {
//     const res = await request(server).get('/books')
//     expect(res.status).toBe(200)
//   }, 10000)

//   test('responds with all the books', async () => {
//     const res = await request(server).get('/books')
//     expect(res.status).toBe(200)
//     expect(res.body).toBeGreaterThan(0)
//   }, 10000)
// })


