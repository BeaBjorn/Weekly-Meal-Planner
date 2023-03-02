
/*

Student: Beatrice Björn
Senast uppdaterad: 2022-12-13
För: Projekt - DT162G - Javascriptbaserad webbutveckling

*/


//Includes npm packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//use bodyParser and cors
app.use(bodyParser.json());
app.use(cors());

//Connection to mongo db
mongoose.connect('mongodb://127.0.0.1:27017/weekplanner_db')
.then(() => {
    console.log("Connected to mongo-DB:weekplanner_db");
})
.catch(err => {
    console.log("NOT CONNECTED TO MONGO-DB!");
    console.log(err);
})

//Shows message in console when server is running on port 3000
app.listen(3000, () => console.log('Server up and running!'));

//Pasing incoming json-requests
app.use(express.json());

//Includes the files in the "routes" folder and saves them in a variable called "coursesRouter" and connects to the req, res statements in the file "courses.js"
const listRouter = require('./routes/lists');
app.use('/lists', listRouter);

const weekRouter = require('./routes/weeks');
app.use('/weeks', weekRouter);


