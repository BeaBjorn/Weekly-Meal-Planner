
# Cretaed by : Beatrice Björn
# Date : 2023-02-13   

This repository contains an API with full CRUD functionality lined to a MongoDB.


### Consuming API  
This API is open for everyone to use as the like. Make sure to have Node.js installed. 

#### Commands
Download repository : git clone https://github.com/BeaBjorn/Weekly-Meal-Planner.git  

Install node-modules : npm install

Start server : nodemon  


### **API - folders**

| Models | Description |
| --- | --- |
| list.js | Model for database collection "lists" |  
| week.js |  Model for database collection "weeks" |  

| routes | Description |
| --- | --- |
| lists.js | CRUD functionality for database collection lists |    
| weeks.js | CRUD functionality for database collection weeks |  

| index.js | Description |
| --- | --- |
| index.js | Importing npm-packages, connectiong to the database "weekplanner_db" and routes |     
 

### **Endpoints**
| Url | Description |
| --- | --- |
| http://localhost:3000/weeks |  CREATE and READ for database collection weeks |
| http://localhost:3000/weeks/{id} |  UPDATE and DELETE for database collection weeks |
| http://localhost:3000/lists |  CREATE and READ ffor database collection lists |
| http://localhost:3000/lists/{id} |  UPDATE and DELETE for database table lists |  


### **Json-object**  

| collection | json-object |
| --- | --- |
| weeks | { "week": "Sunday", "food": "Lasagne" } | 
| lists | { "name": "Apples", "units": 5 } | 
