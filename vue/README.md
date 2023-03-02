# Projektuppgift för kursen JavaScriptbaserad webbutveckling - DT162G

## Student : Beatrice Björn
## Datum : 2023-02-13   


Det här repositoryt innehåller en webbapplikation som skapats för projektuppgiften i kursen JavaScriptbaserad webbutveckling.    
Webbapplikationen är en veckoplan för maträtter och inköpslista och konsumerar ett API som skapats med hjälp av och är kopplat till en MongoDB.  


### Användning  

#### Clona Project:   
git clone https://github.com/BeaBjorn/Projekt---webbapplikation---DT162G.git  


#### Installera node_modules
 - npm install

#### Starta server
 - npm run dev  

#### Förbered för publicering genom att skapa dist katalog
 - npm run build


### **Endpoints**
| Url | Beskrivning |
| --- | --- |
| http://localhost:3000/weeks |  CREATE och READ för att lägga till och läsa ut data från databastabellen "weeks"|
| http://localhost:3000/weeks/{id} |  UPDATE och DELETE för att uppdatera och radera det värden med rätt id i databastabellen "weeks"|
| http://localhost:3000/lists |  CREATE och READ för att lägga till och läsa ut data från databastabeller "lists"|
| http://localhost:3000/lists/{id} |  UPDATE och DELETE för att uppdatera och radera det värdet med rätt id i databastabeller "lists"|  
     