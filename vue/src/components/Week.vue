<template>
  <!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Structure for how data from the database collection weeks is displayed on screen -->
<!-- RouterLink to send user to UpdateWeekView with correct id when clicked -->
    <div class="heading">
        <div class="inline">
            <p class="week">{{ week.week }} : </p>
            <p class="food">{{ week.food }}</p>
            <RouterLink class="updt" :to="{name: 'update-week', params: { id: week._id } }">
        Edit</RouterLink>
        </div>
        <hr />
    </div>
</template>

<script>

export default {
//Name of component
    name: "week",
    data() {
//Returns weeks as an empty array
        return{
            weeks: []
        }
    },
//Component exported as prop
    props: {
         week: Object
    }, 
    }
</script>

<style scoped>
/* Styles applied to elements in this file only */
  .heading{
    margin: auto;
  }

  .inline{
    display: inline-block;
    width: 100%;
    margin: auto;
  }
  p{
    display: inline-block;
    width: 40%;
    margin-left: 3%;
  }

  .updt{
    margin-left: 18%;
    text-decoration: none;
    border: 1px solid blue;
    padding: 1% 1.5% 1% 1%;
    border-radius: 5px;
    color: blue;
  }

  .updt:hover{
    background-color: rgba(124, 198, 255, 0.668);
  }

  .week{
    font-weight: 700;
  }
   .food{
    margin-left: -10%;
   }

</style>
