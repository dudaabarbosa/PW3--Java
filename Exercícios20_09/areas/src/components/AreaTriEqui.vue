<template>
<h2>ÁREA DO TRIÂNGULO <br> EQUILÁTERO</h2>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRantK_ozByqe7UpXMWUNByeg7_baaGnErPBw&s">
<form @submit.prevent="calcularArea">
    <input type="number" v-model="lado" placeholder="Valor do lado">
    <br>
    <input type="submit" value="Calcular">
</form>
<h2>Resultado: {{ result }}</h2>
</template>

<script>
export default {
    data(){
        return{
            lado: '',
            result: ''
        }
    },

    methods: {
        calcularArea(){
        this.result= (this.lado*this.lado) * Math.sqrt(3) /4
    }
}
}
</script>

<style>

</style>