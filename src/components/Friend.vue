<template>
    <div class="friend">
        <Search class="search" />
        <Card />
    </div>
</template>
<script>
import Search from './Search'
import Card from './Card'
export default {
    name: 'Friend',
    components: {
        Search,
        Card
    }
}
</script>
<style scoped>
.friend{
    background: rgb(192, 186, 186);
}
.search{
    width: 100%;
}

</style>