<template>
<MenuPage></MenuPage>
<ContentPage></ContentPage>
</template>

<script>
import ContentPage from '../ContentPage.vue';
import MenuPage from '../MenuPage.vue';

export default {
    name: "HomePage",
    components: {MenuPage, ContentPage}
}
</script>

<style>

</style>