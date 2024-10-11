<template>
<h2>SOBRE NÓS</h2>
<p>O Espaço Filhos da Dança é um espaço dedicado à arte do movimento, onde a paixão pela dança se transforma em aprendizado e expressão! </p>
<p> Com professores experientes e uma variedade de estilos, desde ballet clássico até danças urbanas, a escola atende alunos de todas as idades e níveis. As aulas são projetadas para estimular a criatividade, melhorar a técnica e promover a saúde física e mental. Além das aulas regulares, o Filhos da Dança oferece workshops e apresentações, incentivando os alunos a se apresentarem e compartilharem seu talento. Venha fazer parte dessa comunidade vibrante e descobrir o poder transformador da dança!</p>
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Frase preferida</th>
        <th>Foto</th>
    </tr>
    <tr v-for="(objeto, index) in objetos" :key="index">
        <td>{{ objeto.Nome }}</td>
        <td>{{ objeto.Idade }}</td>
        <td>{{ objeto.Frase }}</td>
        <td><img class="imagem" :src="objeto.Foto"></td>
    </tr>

</table>

</template>

<script>
export default {
    name: "SobreNos",
    data(){
        return{
            objetos: [
                {"Nome": "Eduarda Barbosa", "Idade": "17 anos", "Frase": "É isso", "Foto": require("@/assets/dudis.jpg")},
                {"Nome": "Khaléu Sanches", "Idade": "17 anos", "Frase": "Sim", "Foto": require("@/assets/babykhaleu.jpg") }]
        }
    }

}
</script>

<style>
p{
    margin: 30px;
}

table{
    margin: auto;
    border: 2px solid black;

}
.imagem {
    width: 30%;
    border-radius: 30%;
}
td, th{
    padding: 15px;
    border: 2px solid black;
}
</style>