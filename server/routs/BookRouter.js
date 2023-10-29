const express = require('express')
const BookController = require('../constrollers/BookController.js')

const router =  express.Router()

router.get('/all', BookController.getall)
router.get('/:id', BookController.getone)
router.post('/add', BookController.add)
router.put('/update/:id', BookController.update)
router.delete('/delete/:id', BookController.delete)

module.exports = router