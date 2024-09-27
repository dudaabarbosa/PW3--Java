<template>
<div>
  <nav>
    <router-link to="/">HOME</router-link>
    <router-link to="/circulo">Área do Círculo</router-link>
    <router-link to="/trapezio">Área do Trapézio</router-link>
    <router-link to="/triangulo">Área do Triângulo</router-link>
  </nav>
</div>
<router-view></router-view>
</template>

<script>

export default {
  name: 'App'
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

img {
  width: 200px;
}

.caixa{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
