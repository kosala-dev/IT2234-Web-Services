const express = require('express')
const route = express.Router()
const StudentService = require('./StudentService')

route.get('/', (req,res)=> {
    const results = StudentService.getStudents1()
    if(results){
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No Data Found")
    }
})

route.get('/:id', (req,res)=> {
    const id = req.params.id
    const results = StudentService.getStudents2(id)
    if(results){
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No Data Found")
    }
})

module.exports = route