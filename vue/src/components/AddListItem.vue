<template>
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Form to add items to the database collection "lists" -->
<!-- When the form is submitted the function "addItem" is run -->
<!-- "added" is used to show a cofirmation message when an item has been added successfully -->
<!-- v-if is used to ensure that the name contains at least 3 characters -->
    <div>
        <p>{{ added }}</p>
        <form @submit.prevent="addItem()">

            <label for="name">Item : </label><br class="addBr" />
            <p class="error" v-if="name.length < 3 && name.length > 0">Must contain 3 characters or more!</p><br class="addBr" />
            <input class="textInput" type="text" v-model="name" required><br class="addBr" />
            <label for="units">How many? </label><br class="addBr" />
            <input class="textInput" type="number" v-model="units"><br class="addBr" />
            <input class="sub" type="submit" value="Add">
        </form>
    </div>

</template>

<script>

export default{
//Name of component
    name: "addItem",
    data(){
//Sets name, units, added and errors to empty strings to avoid error messages in console
        return{
            name: "",
            units: "",
            added: "",
            error: ""
        }
    },
//emit for "itemAdded"    
    emits: ["itemAdded"],
//Methods with a function to add item.
//The function chechs if the name in the input field is longer or equal to 3 caharacters, if so, submitted name and units are stored in the variable "listyBody"
//Fetch is used along with POST to be able to add data to the database. 
//"listBody" is added to the database
//name and units are set to an empty strings and added is set to a message confirming data has been added to the database successfully
//"itemAdded" is emited
    methods: {
       async addItem(){
        if(this.name.length >= 3){
                    let listBody = {
                    name: this.name, 
                    units: this.units
            };
            const resp = await fetch("http://localhost:3000/lists", {
                method: "POST", 
                headers: { "Accept": "application/json", 
                           "Content-type": "application/json",
                }, 
                body: JSON.stringify(listBody)
            });

            const data = await resp.json();
                this.name = "",
                this.units = "",
                this.added = "Item added!"
                this.$emit("itemAdded");
            }
        }
    }
}

</script>


<style scoped>
/* Styles applied to elements in this file only */
    form{
        margin: auto;
        text-align: left;
        background-color: black;
        padding: 3%;
        color: white;
    }

    .textInput{
        width: 30%;
        padding: 0.5%;
        margin-right: 2%;
        margin-top: 1%;
    }

    .sub{
        background-color: white;
        border: none;
        color: black;
        padding: 1%;
        width: 10%;
    }

    label{
        margin-right: 1.5%;
    }
    .sub:hover{
        background-color: rgb(101, 224, 138);
    }

    h3{
        margin-left: 3%;
        margin-top: 3%;
    }
    p{
        color: rgb(0, 171, 0);
        margin-left: 3%;
        font-weight: 700;
    }

    .error{
        color: rgb(255, 92, 92);
        margin-left: 0;
    }
</style>