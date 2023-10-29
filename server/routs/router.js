const {Router} = require('express')
const BookRouter = require('./BookRouter.js')
const AuthorRouter = require('./AuthorRouter.js')
const GenreRouter = require('./GenreRouter.js')
const router = new Router()
router.use('/books', BookRouter)
router.use('/author', AuthorRouter)
router.use('/genre', GenreRouter)

module.exports = router