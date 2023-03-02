<template>
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Header with logo -->
    <header>
        <div>
            <img src="../assets/planner.png" /> 
        </div>
    </header> 
</template>

<script>
//Component exported as prop
export default {
        props: {
            Header: Object
        }
    }
</script>

<style scoped>
/* Styles applied to elements in this file only */
header{
    background-color: black;
    padding: 1%;
}

img{
    width: 700px;
    height: auto;
    margin: auto;
}
h1{
    color: white;
}
div{
    text-align: center;
}

@media(max-width: 700px){
    img{
        width: 400px;
    } 
}

@media(max-width: 440px){
    img{
        width: 300px;
    } 
}


</style>