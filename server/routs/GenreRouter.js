const express = require('express')
const GenreController = require('../constrollers/GenreController.js')

const router =  express.Router()

router.get('/all', GenreController.getall)
router.get('/:id', GenreController.getone)
router.post('/add', GenreController.add)


module.exports = router