const {Books, Genre,Author} = require("../models.js");

class GenreService {
    async getall(){
        const genres = await Genre.findAll()
        return genres
    }
    async getone(id){
        const genre = await Genre.findAll({where: id, include: {Books, Author}})
        return genre
    }
    async add(name){
        const genre = await Genre.create({name})
        return genre
    }

}

module.exports = new GenreService()