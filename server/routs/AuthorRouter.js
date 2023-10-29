const express = require('express')
const AuthorController = require('../constrollers/AuthorController.js')

const router =  express.Router()

router.get('/all', AuthorController.getall)
router.get('/:id', AuthorController.getone)
router.post('/add', AuthorController.add)
router.put('/update/:id', AuthorController.update)
router.delete('/delete/:id', AuthorController.delete)

module.exports = router