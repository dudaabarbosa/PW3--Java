<template>
    <div>
        <div>
            <form @submit.prevent="addItems">
                <input type="text" v-model="Inputvalue">
                <input type="submit" value="Adicionar Item na Tabela">
            </form>
        </div>


<div>
    <table
    style="border: 1px,solid,black; width: 400px; text-align: center; align-items: center; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;">
        <tr style="color:blue">
            <td>Index</td>
            <td>Item</td>
        </tr>
        <tr v-for="(item, index) in items " :key='index' style="color: rebeccapurple;">
            <td>{{ index + 1    }}</td>
            <td>{{ item }}</td>
        </tr>
    </table>
</div>
</div>
</template>


<script>
export default {

    data() {
        return {
            items: [],
            Inputvalue: ''
        }
    },
    props: {

    },

    methods: {
        addItems() {
            this.items.push(this.Inputvalue);
        }
    }
}
</script>

<style>
table,
tr,
td {
    border: 1px, solid, black;
    margin: auto;
}
</style>