
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Form to update item with given id in the database collection "weeks" -->
<!-- When the form is submitted the function "updateFood" is run -->
<!-- v-if is used to ensure that the name contains at least 5 characters -->
<!-- RouterLink is used to take user back to homepage without making any changes to item-->
<template>
    <div class="mainDiv">
        <form @submit.prevent="updateFood()">
            <h3 class="heading">Edit item info</h3>
        <label for="food">Food : </label><br />

        <input name="food" class="updtInput" v-model="food" type="text"/><br />
        <input class="sub" type="submit" value="Update" />
        <RouterLink class="exit" to="/">Exit</RouterLink>
        </form>
    </div>
</template>



         
<script>
//The Week component is imported
import Week from "../components/Week.vue";   

export default{
        data(){
//food is set to an empty string
            return{
                food: ""
            }
        },
//Components used
        components: {
             Week
        },
//Methods used
        methods: {
//Function to get the food with the given id
//The variable id is set to the id submitted when the update button was clicked
//Fetch is used with GET and the endpoint plus the id submitted when the update button was clicked
            async getFood() {
                let id = this.$route.params.id;
                const resp = await fetch("http://localhost:3000/weeks/" + id, {
                     method: "GET",
                     headers: {
                     Accept: "application/json",
                             "Content-type": "application/json",
                    },
                })
                .then(res => res.json())
                .then(data => {
                    this.week = data.week;
                    this.food = data.food;
                })
                .catch(err =>{
                    console.log(err)
                })
            },
//Function to update food
//The variable foodBody is set to the week and food values submitted
//The variable id is set to the id submitted when the update button was clicked
//Fetch is used with PATCH to update database values
//When food has been updated the user gets redirected to the home page
            async updateFood() {
                let id = this.$route.params.id;
                let foodBody = {
                    week: this.week,
                    food: this.food
                };
          
                const resp = await fetch("http://localhost:3000/weeks/" + id, {
                    method: "PATCH",
                    headers: {
                    Accept: "application/json",
                            "Content-type": "application/json",
                    },
                    body: JSON.stringify(foodBody),
                });
                const data = await resp.json();
                this.$router.push("/");
            },
        },
//Munted methods to be run on page load
        mounted() {
            this.getFood();
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
        

