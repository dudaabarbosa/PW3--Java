<template>
    <div class="cardBorder">
        <div class="cardNucleo">
            <p>{{ text }}</p>
        </div>
        <h3>{{ title }}</h3>
    </div>
</template>
<script>
export default {
  name: 'PrimeiroComponente',
  props: {
    text: String,
    title: String
  }
}
</script>

<style>
    .cardBorder{
        width: 250px;
        height: 400px;
        padding: 8px;
        margin: auto;
        background-color: #42b983;
        border-radius: 15px;
        color: rgb(214, 214, 214);
    }
    .cardBorder:hover{
        background-color: #39a072;
        color: white;
    }
    .cardNucleo:hover{
        background-color: #1f2a36;
    }
    .cardNucleo{
        width: 80%;
        height: 80%;
        margin: auto;
        border-radius: 15px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #35495e;
    }
    .cardNucleo p{
        padding-top: 10%;
    }
    .cardBorder h3{
        text-align: center;
    }
</style>