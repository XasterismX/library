const {Author,Books} = require("../models.js");

class AuthorService {
    async getall(){
        const authors = await Author.findAll({include: Books})
        return authors
    }
    async getone(id){
        const author = await Author.findAll({where: {id}, include: Books})
        return author
    }
    async add(name, surname){
        const author = await Author.create({name, surname})
        return author
    }
    async update(id, name, surname){
        const updatedAuthor = await Author.update({where: id},{name, surname})
        return updatedAuthor
    }
    async delete(id){
        const deletedAuthor = await Author.destroy({where: id})
        return deletedAuthor
    }
}

module.exports = new AuthorService()