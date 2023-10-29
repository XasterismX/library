const express = require('express')
const cors = require('cors')
require('dotenv').config()
const sequelize = require('./db.js')
const router = require('./routs/router.js')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.get('/', (req, res)=>{
    res.json('asdasd').status(200)
})

function start() {
    try {
        sequelize.authenticate()
        sequelize.sync({alter: true})
        app.listen(PORT, ()=>console.log(`WORKING ON ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()