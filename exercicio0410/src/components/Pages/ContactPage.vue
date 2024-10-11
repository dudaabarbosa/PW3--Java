<template>
<MenuPage></MenuPage>
<FormContact></FormContact>
</template>

<script>
import FormContact from '../FormContact.vue';
import MenuPage from '../MenuPage.vue';

export default {
    name: "ContactPage",
    components: {FormContact, MenuPage}
}
</script>

<style>

</style>