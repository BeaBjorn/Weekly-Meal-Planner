<template>
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Div with header for food plan and including the component Week -->
<!-- v-if is used to be able to show and hide the week plan when clicked -->
<!-- If the food plan is shown an icon with a cross is displayed and if the food plan is closed a burger-menu icon is displayed -->
<!-- v-for is used to loop through all values in te database collection weeks -->
  <main>
    <div v-on:click="show = !show" class="bigDiv">
          <div class="toggle">
            <h2>Food Plan</h2>
            <img class="burger" v-if="show == false" src="../assets/burger.svg" alt="">
            <img class="burger" v-if="show == true" src="../assets/cross.svg" alt="">
          </div>

          <div v-if="show" class="smallDiv">
            <Week class="list" v-for="week in weeks" :week="week" :key="week.id" />
          </div>
    </div>

<!-- Div with header for shopping list, including the component List -->
<!-- v-for is used to loop through all values in te database collection lists -->
<!-- When deleteItem is emited the function deleteItem is run. The right value is deleted by including the id in the function -->
<!-- The component AddListItem is included to show form created in the component AddListItem -->
<!-- When itemAdded is emoted the function GetLists is run to update list with new data -->
    <div class="bigDiv">
        <h2 id="shoppingList">Shopping List</h2>
            <div class="smallDiv">
              <List @deleteItem="deleteItem(list._id)" class="list" v-for="list in lists" :list="list" :key="list.id" />
            </div>
            <div class="add">
              <AddListItem @itemAdded="getLists()"  />
            </div>
    </div>
  </main>
</template>

<script>
//Importing componenst
import Week from '../components/Week.vue';
import List from '../components/List.vue';
import AddListItem from '../components/AddListItem.vue';

export default {
  data(){
//Sets weeks and lists to empty arrays and show to true to display the week plan when page is reloaded   
    return {
      weeks: [], 
      lists: [],
      show: true
    }
  },
//Components used
      components: {
          Week, 
          List,
          AddListItem
      },
//Methods
      methods: {
//The function getWeeks using fetch along with GET to extract data from database and return data. 
        async getWeeks() {
          const response = await fetch("http://localhost:3000/weeks", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            this.weeks = data;
        },
//The function getLists using fetch along with GET to extract data from database and return data. 
        async getLists() {
          const response = await fetch("http://localhost:3000/lists", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            this.lists = data;
        },
//The function deleteItems using fetch along with DELETE to delete data with a given id from database. 
//The function getLists is run to update list with new data
        async deleteItem(id){
            const resp = await fetch("http://localhost:3000/lists/" + id, {
                method: "DELETE", 
                headers: {
                    "Accept": "application/json", 
                    "Content-type": "application/json"
                }
            });

            const data = await resp.json();
            this.getLists();
        }

    },
//Mounted functions to run on page load
        mounted(){
            this.getWeeks();
            this.getLists();
    }
}
</script>

<style>
/* Styles applied to elements in this file only */
  main{
    width: 75%;
    margin: auto;
    margin-top: 3%;
  }

  .bigDiv{
    margin: auto;
    margin-bottom: 1%;
  }

  .smallDiv{
    width: 87%;
    margin: auto;
  }

  h2{
    width: 100%;
    background-color: black;
    color: white;
    font-weight: 500;
    padding: 1% 0% 1% 0%;
    padding-left: 3%;
  }

  .toggle{
    display: flex;
  }

  h2, img{
    display: inline-block;
  }
  img{
    margin-left: -7%;
    width: 30px;
  }

  .add{
    margin: auto;
    width: 87%;
    margin-top: 3%;
  }
</style>