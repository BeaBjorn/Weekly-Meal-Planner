<template>
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Structure for how data from the database collection lists is displayed on screen -->
<!-- v-if is used to display number of units only if present -->
<!-- RouterLink to send user to UpdateListView with correct id when clicked -->
<!-- Button with emit for the function "deleteItem" to run when button is clicked-->
    <div class="heading">
        <div class="inline">
            <p class="item">{{ list.name }}</p>
            <p v-if="list.units !== null" class="units">Units : {{ list.units }}</p>
            <p v-if="list.units === null" class="units"> {{ list.units }}</p>
            <RouterLink class="updtList" :to="{name: 'update-list', params: { id: list._id } }">Edit</RouterLink>
            <button class="del" @click="$emit('deleteItem')">Delete</button>
        </div>
        <hr />
    </div>

</template>

<script>
export default {
//Name of component
    name: "list",
    data() {
//Returns lists ad an empty array
        return{
            lists: []
        }
    },
//Component exported as prop
    props: {
         list: Object
    }, 
    }
</script>

<style scoped>
/* Styles applied to elements in this file only */
h2{
      color: white;
      margin-left: 3%;
      display: inline-block;
      width: 100%;
  }

  p{
    display: inline-block;
    margin-left: 3%;
    width: 40%;
  }

  .heading{
    margin: auto;
  }

  .inline{
    display: inline-block;
    width: 100%;
    margin: auto;
  }

  .units{
    margin-left: -5%;
  }

  .updtList{
    margin-left: 5%;
    text-decoration: none;
    border: 1px solid blue;
    padding: 1% 1.5% 1% 1%;
    border-radius: 5px;
    color: blue;
  }

  .updt:hover{
    background-color: rgba(124, 198, 255, 0.668);
  }

  button{
    border: solid 1px red;
    background-color: rgba(255, 255, 255, 0);
    padding: 1.3% 1.3% 1% 1.3%;
    margin-left: 2%;
    border-radius: 5px;
  }

  button:hover{
    background-color: rgba(255, 118, 118, 0.727);
  }

</style>
