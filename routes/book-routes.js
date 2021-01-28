const router = require('express').Router()
const { Book } = require('../models')

// get saved books
router.get('/saved', async (req, res) => {
  const books = await Book.find({})
  res.status(200).json(books)
})

// save a book
router.post('/saved', (req, res) => {
  console.log(req.body)
  Book.create(req.body).then((result) => {
    console.log('The book ' + req.body.title + ' is saved.')
    return res.json(result)
  })
})

// delete a book
router.delete('/:id', async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id)
    if (result.deletedCount === 0) {
      return res.status(400).json({ err: 'Error: Book not found in database.' })
    } else {
      console.log('The book "' + result.title + '" is deleted from saved list.')
      res.status(200).json({ data: result })
    }
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ err: err.message })
  }
})

module.exports = router
