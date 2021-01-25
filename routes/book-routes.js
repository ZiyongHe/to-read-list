const router = require('express').Router()
const { Book } = require('../models')

// get saved books
router.get('/saved', (req, res) => {
  Book.find({}).then((result) => res.status(200).json(result))
})

// save a book
router.post('/saved', (req, res) => {
  Book.create(req.body).then((result) => {console.log('The book' + req.body.title + ' is saved.')res.json(result)})
})

// delete a book
router.get('/:booktitle', (req, res) => {
  Book.deleteOne({ title: req.params.booktitle }).then(() => {
    console.log(
      'The book ' + req.params.booktitle + ' is deleted from saved list.'
    )
    Book.find({}).then((result) => res.status(200).json(result))
  })
})

module.exports = router
