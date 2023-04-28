const express = require('express')

const booksRouter = require('./api/books/router')
const server = express()

server.use(express.json())
server.use('/api/books', booksRouter)



server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});


module.exports = server;
