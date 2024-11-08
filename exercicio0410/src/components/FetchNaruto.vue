<template>
    <div class="container">
        <div class="row">
            <!-- Exibe uma msg enqt aguarda dds da api -->
            <div v-if="loading" class="col-12 text-center">
                <p>Carregando...</p>
            </div>

            <!-- Exb 1 msg de erro caso a api falhe -->
            <div v-if="error" class="col-12 text-center">
                <p>Ops, deu merda</p>
            </div>

            <!-- Exibe lista de personagens -->
            <div v-else v-for="character in characters" :key="character.id" class="col-md-4">
                <div class="card mb-4">
                    <img :src="character.images[0]" class="card-img-top">
                    <div class="card-body">
                         <h4 class="card-title"> <router-link :to="{name: 'Informações', params: {id: character.id}}"> <b> {{ character.name }} </b> </router-link> </h4> 
                         <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Jutsus
                            </button>
                            <ul class="dropdown-menu">
                                <li v-for="jutsu, index in character.jutsu" :key="index" class="dropdown-item">{{ jutsu }}</li>
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            characters: [],
            loading: true,
            error: false,
            jutsus: []
        }
    },
    methods:{
        fetchNaruto(){

            fetch('https://dattebayo-api.onrender.com/characters/')
            .then(response => {
                if (!response.ok){
                    throw new Error("Network error");
                }
                return response.json();
            })
            .then(data => {
                console.log("teste2")
                console.log(data)

                this.characters = data.characters;
                this.loading = false;
            })
            .catch(() => {
                this.error = true;
                this.loading = false;
            })
        }
    },
    mounted(){
        this.fetchNaruto();
    },

}
</script>

<style>

</style>