const db = require('../../db-config')
const request = require('supertest')
const server = require('../../server')


beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('[GET] /api/books', () => {
  test('responds with a 200 ok', async () => {
    const res = await request(server).get('/api/books')
    expect(res.status).toBe(200)
  })

  test('responds with all the books', async () => {
    const res = await request(server).get('/api/books')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(5)
  })
})


