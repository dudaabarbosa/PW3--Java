<template>
<form @submit.prevent.="addPerson">
    <text>Cadastrar pessoa:</text>
    <br>
    <input type="text" v-model="name" placeholder="nome">
    <input type="text" v-model="age" placeholder="idade">
    <input type="text" v-model="document" placeholder="documento">

    <button type="button" @click="addPerson">Adicionar</button>
</form>

<div v-for="(person, index) in personList" :key="index">
    <hr>
    <p>ID: {{ index + 1 }} </p>
    <p>Nome: {{ person.name }} </p>
    <p>Idade: {{ person.age }} </p>
    <p>Documento: {{ person.document }} </p>
    <hr>
</div>
</template>

<script>
export default {
    data(){
        return{
            personList: [],
            name: '',
            age: '',
            document: ''
        }
    },
    methods: {
        addPerson(){
            let person = {
                name: this.name,
                age: this.age,
                document: this.document,
            }
            this.personList.push(person)
        }
    }
}
</script>

<style>

</style>