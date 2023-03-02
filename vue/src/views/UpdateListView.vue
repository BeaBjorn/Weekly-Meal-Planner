
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Form to update item with given id in the database collection "lists" -->
<!-- When the form is submitted the function "updateItem" is run -->
<!-- v-if is used to ensure that the name contains at least 3 characters -->
<!-- RouterLink is used to take user back to homepage without making any changes to item-->
<template>
    <div class="mainDiv">
        <form @submit.prevent="updateItem()">
            <h3 class="heading">Edit item info</h3>
                <label for="name">Name : </label><br />
                <p class="error" v-if="name.length < 3 && name.length > 0">Must contain 3 characters or more!</p><br class="addBr" />
                <input name="name" class="updtInput" v-model="name" type="text" required/><br />
                <label for="units">Units : </label><br />
                <input name="units" class="updtInput" v-model="units" type="number"/><br />
                <input class="sub" type="submit" value="Update" />
                <RouterLink class="exit" to="/">Exit</RouterLink>
        </form>
    </div>
</template>
      
<script>
//The List component is imported
import List from "../components/List.vue";   

export default{
    data(){
//Name adn units is set to an empty strings and 
        return{
            name: "",
            units: ""
        }
    },
//Components used
    components: {
            List
    },
    
    methods: {
//Function to get the item with the given id
//The variable id is set to the id submitted when the update button was clicked
//Fetch is used with GET and the endpoint plus the id submitted when the update button was clicked
        async getItem() {
            let id = this.$route.params.id;
            const resp = await fetch("http://localhost:3000/lists/" + id, {
                 method: "GET",
                 headers: {
                 Accept: "application/json",
                         "Content-type": "application/json",
                },
            })
            .then(res => res.json())
            .then(data => {
                this.name = data.name;
                this.units = data.units;
            })
            .catch(err =>{
                console.log(err)
            })
        },
//Function to update a item
//The variable itemBody is set to the name of the item and the units
//The variable id is set to the id submitted when the update button was clicked
//Fetch is used with PATCH to update database values
//When a item has been updated the user gets redirected to the home page
        async updateItem() {
            let id = this.$route.params.id;
            if(this.name.length >= 3){
                let itemBody = {
                    name: this.name,
                    units: this.units
            };
          
            const resp = await fetch("http://localhost:3000/lists/" + id, {
                method: "PATCH",
                headers: {
                Accept: "application/json",
                        "Content-type": "application/json",
                },      
                body: JSON.stringify(itemBody),
                });
            const data = await resp.json();
            this.$router.push("/");
            }
        },
    },
//Mounted methods to run on page load
    mounted() {
        this.getItem();
    },
}
</script>
            
<style scoped>
/* Styles applied to elements in this file only */
    .mainDiv{
        margin: auto;
        width: 60%;
        color: white;
        margin-block: 3%;
        text-align: center;
        margin-bottom: 13%;
    }

    h3{
        margin-top: -2%;
        margin-bottom: 5%;
        font-weight: 500;
        font-size: 160%;
        padding-top: 2%;
    }

    form{
        width: 80%;
        margin: auto;
        text-align: left;
        background-color: black;
        padding: 3%;
    }

    .updtInput{
        width: 90%;
        padding: 1%;
        margin-top: 2%;
        margin-bottom: 5%;
    }

    .sub{
        background-color: white;
        border: none;
        color: black;
        padding: 2%;
        width: 70%;
    }

    .sub:hover{
        background-color: rgb(101, 224, 138);
    }
    .exit{
        background-color: white;
        border: none;
        color: black;
        padding: 1.4% 5% 2% 5%;
        margin-left: 3%;
    }

    a{
        text-decoration: none;
        color: black;
    }

    .exit:hover{
        background-color: rgb(248, 149, 161);
    }

    .error{
        color: rgb(255, 92, 92);
        margin-left: 0%;
    }
    
            
    
</style>
        

