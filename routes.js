const express = require('express')
const router = express.Router()

const fs = require('fs')

router.get('/', (req,res)=>{
    res.redirect('/food')
})

router.get('/food', (req,res) => {
    fs.readFile('./data.json', 'utf8', (err,data) => {
        if(err) return res.status(500).send("An error has occured :(")
        var foodOBj = JSON.parse(data)
        res.render('home', foodOBj)
    })
})

router.get('/food/:id', (req,res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if(err) return res.status(500).send("An error has occured :(")

        var id = req.params.id
        var foodOBj = JSON.parse(data)
        var food = foodOBj.food.find((food) => food.id == id)
        res.render('food', food)
    })
})

module.exports = router