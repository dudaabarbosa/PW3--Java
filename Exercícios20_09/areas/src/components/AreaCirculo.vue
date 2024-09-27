<template>
<h2>ÁREA DO CÍRCULO</h2>
<img src="https://matika.com.br/images/391/circulo_raio_r.svg">
<form @submit.prevent="calculararea">
<input type="number" v-model="raio" placeholder="Digite o valor do raio">
<br>
<input type="submit" value="Calcular">
</form>
<h2>Resultado: {{ result }}</h2>

</template>

<script>

export default {
    data(){
        return{
            pi: 3.14,
            raio: '',
            result: ''
        }
    },
    methods: {
        calculararea(){
            this.result= Math.PI * (this.raio**2);
        }
    }
}

</script>

<style>
form {
    margin-top: 30px;
}
</style>