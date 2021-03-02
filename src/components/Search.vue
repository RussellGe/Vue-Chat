<template>
    <div class="search">
        <i class="iconfont icon-search"></i>
        <input class="searchBar" type="text">
    </div>
</template>
<script>
export default {
    name: 'search',
}
</script>
<style scoped>
.search{
    background: rgb(151, 144, 144);
    height: 50px;
    width: 60%;
    margin-left: 20%;
    margin-top: 1vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;

}
.searchBar{
    display: inline;
    width: 100px;
    min-width: 0;
    width: 80%;
    outline: none;
    background: none;
    margin-left: 5px;
    font-family: 'Roboto Slab', serif;
}

</style>