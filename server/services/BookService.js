const {Books} = require('../models')
class BookService{
    async getall(){
        const books = await Books.findAll()
        return books
    }
    async getone(id){
        const book = await Books.findAll({where: id})
        return book
    }
    async add(name, date, genre_id, author_id){
        const book = await Books.create({name: name, writing_date: date,genreId: genre_id,authorId: author_id})
        return book
    }
    async update(id, name, date, genre_id, author_id){
        const updatedBook = await Books.update({where: id},{name, date,genre_id,author_id})
        return updatedBook
    }
    async delete(id){
        const deletedBook = await Books.destroy({where: id})
        return deletedBook
    }
}

module.exports = new BookService()