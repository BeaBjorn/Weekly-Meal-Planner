"use strict"

/*

Student: Beatrice Björn
Senast uppdaterad: 2022-12-13
För: Projekt - DT162G - Javascriptbaserad webbutveckling

*/

//Includes express
const express =  require('express');
//Creates a new router object
const router = express.Router();
//Includes the file called "Week" in the folder "models"
const Week = require('../models/week');

//Gets all data from the week collection in the database
router.get('/', async (req, res) => {
    try{
        const week =  await Week.find();
        res.json(week);
    }catch (err){
        res.status(500).json({message: err.message})
    }
});

//Gets data with given id from the week collection in the database
router.get('/:id', getWeekById, (req, res) => {
    res.json(res.week);
});

//Inserts data in the week collection in the database
//Form data is (if valid) inserted into databse collection
router.post('/', async (req, res) => {
    const week = new Week({ 
        week: req.body.week,
        food: req.body.food
    })
    try{
        const newWeek = await week.save();
        res.status(201).json(newWeek);
    }catch (err){
        res.status(400).json({message: err.message})
    }
});

//Uses PATCH to update data with a given id in the week collection in the database
router.patch('/:id', getWeekById, async (req, res) => {
    if(req.body.week != null){
        res.week.week = req.body.week;
        res.week.food = req.body.food;
    }
    try{
        const updtWeek = await res.week.save();
        res.json(updtWeek);
    }catch (err){
        res.status(400).json({message: err.message})
    }
});

//Deletes data with given id in the week collection in the database
router.delete('/:id', getWeekById, async (req, res) => {
    try{
        await res.week.remove()
        res.json({message: "Week has been deleted!"})
    }catch (err){
        res.status(500).json({message: err.message})
    }
});

//Function called "findWeekById" which gets data with a given id from the database
//Sends out error message if there is no data with the given id in the database
//This function is then included in all the requests that requires an id to reduce redundancy of code
async function getWeekById(req, res, next){
    let week
    try{
        week = await Week.findById(req.params.id)
        if(week == null){
            return res.status(404).json({message: "There is not week with this id!"})
        }
    }catch (err) {
        res.status(500).json({message: err.message});
    }

    res.week = week;
    next()
} 


//Exports the code in this file
module.exports = router;