const express = require('express')
const Book = require('../../api/books/model')
const router = express.Router()

router.get('/', (req, res, next) => {
  Book.getBooks()
    .then(books => {
      res.status(200).json(books)
    })
    .catch(next)
})

router.get('/:book_id', (req, res, next) => {

  Book.findBookById(req.params.book_id)
  .then(book => {
   res.status(200).json(book)
  })
  .catch(next)
})



router.use((err, req, res, next) => { //eslint-disable-line
  res.status(500).json({
    message: 'Sorry, something went wrong in books router.',
    err: err.message,
    stack: err.stack,
  })
})

module.exports = router