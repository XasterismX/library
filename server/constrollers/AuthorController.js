const AuthorService = require('../services/AuthorService.js')
class AuthorController {
    async getall(req, res){
        const authors = await AuthorService.getall()
        return res.json(authors).status(200)
    }
    async getone(req, res){
        const {id} = req.params
        const author = await AuthorService.getone(id)
        return res.json(author).status(200)
    }
    async add(req, res){
        const {name, surname} = req.body
        const addedAuthor = await AuthorService.add(name, surname)
        return res.json(addedAuthor).status(201)
    }
    async update(req, res){
        const {name, surname} = req.body
        const {id} = req.params
        const updatedAuthor = await AuthorService.update(id ,name, surname)
        return res.json(updatedAuthor).status(200)
    }
    async delete(req, res){
        const {id} = req.params
        const deletedAuthor = await AuthorService.delete(id)
        return res.json(deletedAuthor).status(200)
    }
}

module.exports = new AuthorController()