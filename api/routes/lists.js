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
//Includes the file called "List" in the folder "models"
const List = require('../models/list');

//Gets all data from the list collection in the database
router.get('/', async (req, res) => {
    try{
        const list =  await List.find();
        res.json(list);
    }catch (err){
        res.status(500).json({message: err.message})
    }
});

//Gets data with given id from the list collection in the database
router.get('/:id', getListById, (req, res) => {
    res.json(res.list);
});

//Inserts data in the list collection in the database
//Form data is (if valid) inserted into databse collection
router.post('/', async (req, res) => {
    const list = new List({
        name: req.body.name,
        units: req.body.units
    })
    try{
        const newList = await list.save();
        res.status(201).json(newList);
    }catch (err){
        res.status(400).json({message: err.message})
    }
});

//Uses PATCH to update data with a given id in the list collection in the database
router.patch('/:id', getListById, async (req, res) => {
    if(req.body.name){
        res.list.name = req.body.name;
        res.list.units = req.body.units;
    }
    try{
        const updtList = await res.list.save();
        res.json(updtList);
    }catch (err){
        res.status(400).json({message: err.message})
    }
});

//Deletes data with given id in the list collection in the database
router.delete('/:id', getListById, async (req, res) => {
    try{
        await res.list.remove()
        res.json({message: "List item has been deleted!"})
    }catch (err){
        res.status(500).json({message: err.message})
    }
});

//Function called "findListById" which gets data with a given id from the database
//Sends out error message if there is no data with the given id in the database
//This function is then included in all the requests that requires an id to reduce redundancy of code
async function getListById(req, res, next){
    let list
    try{
        list = await List.findById(req.params.id)
        if(List == null){
            return res.status(404).json({message: "There is not list item with this id!"})
        }
    }catch (err) {
        res.status(500).json({message: err.message});
    }

    res.list = list;
    next()
} 

//Exports the code in this file
module.exports = router;