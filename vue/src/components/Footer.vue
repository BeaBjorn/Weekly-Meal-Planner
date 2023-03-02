<template>
<!--

Vue applikation för projektuppgift i kursen DT162G - JavaScriptbaserad webbutveckling
Skapad av: Beatrice Björn
Senast uppdaterad: 2023-02-13

-->

<!-- Footer with logo and copyright -->
    <footer>
        <div>
            <img src="../assets/planner.png" /> 
            <p>&#169; Beatrice Björn 2023</p>
        </div>
    </footer>
    
</template>

<script>
//Component exported as prop
export default {
        props: {
            Footer: Object
        }
    }

</script>

<style scoped>
/* Styles applied to elements in this file only */
footer{
    margin-top: 4%;
    background-color: black;
    padding: 1%;
    color: white;
}

img{
    width: 400px;
    height: auto;
    margin: auto;
}
div{
    text-align: center;
}

@media(max-width: 500px){
    img{
        width: 200px;
    }
    p{
        font-size: 70%;
        text-align: center;
    }
}
</style>