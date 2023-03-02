# Projektuppgift för kursen JavaScriptbaserad webbutveckling - DT162G

## Student : Beatrice Björn
## Datum : 2023-02-13   


Det här repositoryt innehåller ett API skapat för projektuppgiften i kursen JavaScriptbaserad webbutveckling.  


### Konsumering av API  
Det här är ett öppet API och är därmed tillgängligt för alla som vill konsummera det. 

#### Kommandon
Ladda ner repot : git clone https://github.com/BeaBjorn/Projekt---API---DT162G.git

Installera node-modules : npm install

Starta server : nodemon  


### **API - kataloger**

| Models | Beskrivning |
| --- | --- |
| list.js | Model för databastabellen "lists" |  
| week.js |  Model för databastabellen "weeks" |  

| routes | Beskrivning |
| --- | --- |
| lists.js | CRUD funktionalitet för databastabellen lists |    
| weeks.js | CRUD funktionalitet för databastabellen weeks |  

| index.js | Beskrivning |
| --- | --- |
| index.js | Importering av npm-paket, anslutning till databasen "weekplanner_db" och routes |     
 

### **Endpoints**
| Url | Beskrivning |
| --- | --- |
| http://localhost:3000/weeks |  CREATE och READ för att lägga till och läsa ut data från databastabellen "weeks"|
| http://localhost:3000/weeks/{id} |  UPDATE och DELETE för att uppdatera och radera det värden med rätt id i databastabellen "weeks"|
| http://localhost:3000/lists |  CREATE och READ för att lägga till och läsa ut data från databastabeller "lists"|
| http://localhost:3000/lists/{id} |  UPDATE och DELETE för att uppdatera och radera det värdet med rätt id i databastabeller "lists"|  


### **Json-object**  

| collection | json-object |
| --- | --- |
| weeks | { "week": "Sunday", "food": "Lasagne" } | 
| lists | { "name": "Apples", "units": 5 } | 
