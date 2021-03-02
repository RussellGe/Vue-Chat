<template>
    <div class="card">
        <div class="pic"></div>
    </div>
</template>
<script>
export default {
    name: 'Card',
}
</script>
<style scoped>
.card{
    background: rgb(177, 54, 54);
    height: 90px;
    z-index: 1;
}
.pic {
    /* z-index: 3; */
    /* display: inline; */
    height: 30px;
    width: 30px;
    color: ivory;
}

</style>