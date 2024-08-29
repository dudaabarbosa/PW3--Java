<template>
    <div @click="click" class="botao">
        <p >{{ text }}</p>
    </div>
</template>
<script>
export default {
    name: 'SegundoComponente',
    props: {
        text: String
    },
    methods:{
        click(){
            console.log("Clicou no botão")
        }
    }
}
</script>

<style>
    .botao{
        margin: auto;
        margin-top: 10px;
        width: 100px;
        padding: 10px;
        border-radius: 15px;
        background-color: #42b983;
        color: rgb(214, 214, 214);
    }
    .botao:hover{
        background-color: #39a072;
        color: white;
    }
</style>