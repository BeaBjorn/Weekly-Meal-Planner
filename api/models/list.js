"use strict"

/*

Student: Beatrice Björn
Senast uppdaterad: 2023-02-13
För: Projekt - DT162G - Javascriptbaserad webbutveckling

*/

//Use mongoose
const mongoose =  require('mongoose');
//Creating a model for the list-collection in the database
//the field "name" is of type string and is required
//The field "units" is of type number and is not required
const listSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    units: {
        type: Number
    }
})

//Saving model in variable "List" and exporting it
const List = mongoose.model('List', listSchema);
module.exports = List;

