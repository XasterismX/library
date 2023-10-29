const BookService =require('../services/BookService.js')
class BookController {
    async getall(req, res){
        const books = await BookService.getall()
        return res.json(books).status(200)
    }
    async getone(req, res){
        const {id} = req.params
        const book = await BookService.getone(id)
        return res.json(book).status(200)
    }
    async add(req, res){
        const {name, writing_date, genreId, authorId} = req.body
        const addedBook = await BookService.add(name, writing_date, genreId, authorId)
        return res.json(addedBook).status(201)
    }
    async update(req, res){
        const {name, date, genre_id, author_id} = req.body
        const {id} = req.params
        const updatedBook = await BookService.update(id,name, date, genre_id, author_id)
        return res.json(updatedBook).status(200)
    }
    async delete(req, res){
        const {id} = req.params
        const deletedBook = await BookService.delete(id)
        return res.json(deletedBook).status(200)
    }

}

module.exports = new BookController