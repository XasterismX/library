const {DataTypes} = require('sequelize')
const sequelize = require('./db')

const Books = sequelize.define('books', {
    id: {type: DataTypes.INTEGER, unique: true, allowNull: false, autoIncrement: true, primaryKey:true},
    name:{type: DataTypes.STRING, allowNull: false},
    writing_date: {type: DataTypes.INTEGER}
})
const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, unique: true, allowNull: false, autoIncrement: true, primaryKey:true},
    name:{type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false}
})
const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, unique: true, allowNull: false, autoIncrement: true, primaryKey:true},
    name:{type: DataTypes.STRING, allowNull: false}
})
const AuthorGenre = sequelize.define('author_genre', {
    id: {type: DataTypes.INTEGER, unique: true, allowNull: false, autoIncrement: true, primaryKey:true}})

Genre.hasMany(Books)
Books.belongsTo(Genre)

Author.hasMany(Books)
Books.belongsTo(Author)

Author.belongsToMany(Genre, {through: AuthorGenre})
Genre.belongsToMany(Author, {through: AuthorGenre})

module.exports = {
    Books,
    Genre,
    Author
}