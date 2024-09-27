<template>
<h2>ÁREA DO TRAPÉZIO</h2>
<form @submit.prevent="calcularArea">
    <input type="number" v-model="basemaior" placeholder="Valor da base maior">
    <br>
    <input type="number" v-model="basemenor" placeholder="Valor da base menor">
    <br>
    <input type="number" v-model="altura" placeholder="Valor da altura">
    <br>
    <input type="submit" value="Calcular">
</form>
<h2>Resultado: {{ result }}</h2>

</template>

<script>

export default {
    data(){
        return{
            basemaior: '',
            basemenor: '',
            altura: '',
            result: ''
        }
    },
    methods: {
        calcularArea(){
            this.result= (this.basemaior+this.basemenor) * this.altura /2
        }
    }
}
</script>

<style>

</style>