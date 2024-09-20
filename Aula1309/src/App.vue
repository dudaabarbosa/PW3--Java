<template>
  <NavPage>
  </NavPage>
  <ContentPage></ContentPage>
  <FooterPage></FooterPage>
  <ObjectComponent></ObjectComponent>
</template>

<script>
import NavPage from './components/default/NavPage.vue';
import FooterPage from './components/default/FooterPage.vue';
import ContentPage from './components/default/ContentPage.vue';
import ObjectComponent from './components/default/ObjectComponent.vue';


export default{
  name: 'App',
  components: {
    NavPage, ContentPage, FooterPage, ObjectComponent
  }
}
</script>

<style scoped>

</style>
