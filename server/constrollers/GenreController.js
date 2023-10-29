const GenreService =require('../services/GenreService.js')
class GenreController {
    async getall(req, res){
        const genre = await GenreService.getall()
        return res.json(genre).status(200)
    }
    async getone(req, res){
        const {id} = req.params
        const genre = await GenreService.getone(id)
        return res.json(genre).status(200)
    }
    async add(req, res){
        const {name} = req.body
        const addedGenre = await GenreService.add(name)
        return res.json(addedGenre).status(201)
    }


}

module.exports = new GenreController