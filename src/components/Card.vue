<template>
<div class="wrapper">
    <div class="card">
            <img src="../assets/images/dada.jpeg" alt="">
            <div class="textwrapper">
                <span class="name">Russ</span>
                <span class="text">This is a random message of us</span>
            </div>
            
    </div>
    <div class="border"></div>
    </div>
</template>
<script>
export default {
    name: 'Card',
}
</script>
<style scoped>
.wrapper{
    background: rgb(75, 61, 61);
}
.card{
    
    height: 90px;
    z-index: 1;
    color: white;
    font-family: 'Roboto Slab', serif;
    display: flex;
    padding: 0 10px;
    box-sizing: border-box;
}
img {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-top: 12px;
    margin-left: 10px;
}
.textwrapper {
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-top: 20px;
}
.text {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 12px;
}
.border {
    width: 80%;
    margin-left: 10%;
    height: 2px;
    background: white;
}

</style>