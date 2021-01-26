const router = require('express').Router()
const { Book } = require('../models')

// get saved books
router.get('/saved', async (req, res) => {
  const books = await Book.find({})
  res.status(200).json(books)
})

// save a book
router.post('/saved', async (req, res) => {
  Book.create(req.body).then((result) => {
    console.log('The book ' + req.body.title + ' is saved.')
    return res.json(result)
  })
})

// delete a book
router.delete('/:booktitle', async (req, res) => {
  try {
    const result = Book.deleteOne({ title: req.params.booktitle })
    if (result.deletedCount === 0) {
      return res.status(400).json({ err: 'Error: Book not found in database.' })
    }
    console.log(
      'The book ' + req.params.booktitle + ' is deleted from saved list.'
    )
    res.status(200).json({ data: result })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
})

module.exports = router
