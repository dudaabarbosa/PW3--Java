<template>
<div class="caixa">
  <div>
  <img src="https://matika.com.br/images/391/circulo_raio_r.svg">
  <AreaCirculo></AreaCirculo>
  </div>

  <div>
  <img src="https://matematicabasica.net/wp-content/uploads/2019/02/trapezio-2.png">
  <AreaTrapezio></AreaTrapezio>
  </div>

  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRantK_ozByqe7UpXMWUNByeg7_baaGnErPBw&s">
    <AreaTriEqui></AreaTriEqui>
  </div>
</div>
</template>

<script>
import AreaCirculo from './components/AreaCirculo.vue';
import AreaTrapezio from './components/AreaTrapezio.vue';
import AreaTriEqui from './components/AreaTriEqui.vue';

export default {
  name: 'App',
  components: {
    AreaCirculo, AreaTrapezio, AreaTriEqui
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

img {
  width: 200px;
}

.caixa{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
