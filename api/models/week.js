"use strict"

/*

Student: Beatrice Björn
Senast uppdaterad: 2023-02-13
För: Projekt - DT162G - Javascriptbaserad webbutveckling

*/

//Use mongoose
const mongoose =  require('mongoose');
//Creating a model for the weeks-collection in the database
//the filed "week" is of type string and is required. Enum is used to only be able to store the weekdays in this collection
//The field "food" is of type string and is not required
const weekSchema = new mongoose.Schema({
    week: {
        type: String, 
        required: true, 
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },
    food: {
        type: String
    }
})
//Saving model in variable "Week" and exporting it
const Week = mongoose.model('Week', weekSchema);
module.exports = Week;