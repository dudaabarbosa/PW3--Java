<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <PrimeiroComponente text="texto-texto-texto-texto-texto-texto" title="Título"></PrimeiroComponente>
  <SegundoComponente text="clique no botão"></SegundoComponente>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import SegundoComponente from './components/SegundoComponente.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeiroComponente,
    SegundoComponente
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
