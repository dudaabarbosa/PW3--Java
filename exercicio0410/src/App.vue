<template>
<router-view></router-view>
<FooterPage></FooterPage>
</template>

<script>
import FooterPage from './components/FooterPage.vue';


export default {
  name: 'App',
  components: {
    FooterPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
