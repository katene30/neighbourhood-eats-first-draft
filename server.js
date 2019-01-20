const express = require('express')
const router = require('./routes')
const hbs = require('express-handlebars')

const server = express()

//Middleware
server.engine('hbs', hbs({
    extname: 'hbs'
}))
server.set('view engine','hbs')

server.use(express.static('public'))


server.use('/',router)

module.exports = server