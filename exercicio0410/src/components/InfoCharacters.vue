<template>
<h3><b> {{ character.name }}</b></h3>
<img v-if="character.length>0" :src="character.images[0]">
<p>{{ family.mother }}</p>
<p>{{ family.father }}</p>
<p>{{ personal.birthdate }}</p>
</template>

<script>
export default {
    name: "InfoCharacters",
    data(){
        return{
            character: {},
            family:{},
            personal:{},
            id: this.$route.params.id
        }
    },
    methods: {
        fetchtodos(){
            fetch('https://dattebayo-api.onrender.com/characters/'+ this.id)
            .then(response => {
                if (!response.ok){
                    throw new Error("Network error");
                }
                return response.json();
            })
            .then(data => {
                console.log("teste2")
                console.log(data)
                this.character = data;
                this.family = data.family;
                this.personal = this.character.personal
            })
        }
    },
    mounted(){
        this.fetchtodos();
        
    }
}
</script>

<style>

</style>