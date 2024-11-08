<template>
    <!-- Verifica a existência do personagem -->
    <div class="container" v-if="character">
        <!-- Card com os detalhes da personagem -->
        <div class="card text-center my-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-3">
                    <!-- img-thumbnail deixa a imagem 200x200 (quadradinha) -->
                        <img :src="character.images[0]" class="img-thumbnail">
                        <h3 class="card-title">{{ character.name }}</h3>
                        <p>Niversário: {{ character.personal.birthdate }}</p>
                        <p>Sexo: {{ character.personal.sex }}</p>
                        <p>Tipo sanguíneo: {{ character.personal.bloodType }}</p>
                        <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Jutsus
                                </button>
                                <ul class="dropdown-menu">
                                    <li v-for="jutsu, index in character.jutsu" :key="index" class="dropdown-item">{{ jutsu }}</li>
                                </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <p><b>Family</b></p>
                        <p>Mãe: {{ character.family.mother }}</p>
                        <p>Pai: {{ character.family.father }}</p>
                        <p>Filhos: {{ character.family.son }}</p>
                    </div>
                    <div class="col-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-4" v-else-if="error">
        <p>Carregando...</p>
    </div>
    <div class="text-center mt-4" v-else>
        <p>Erro ao carregar personagem.</p>
    </div>


</template>

<script>
export default {
    props: ['id'],
    name: "InfoCharacters",
    data(){
        return{
            character: null,
            loading: true,
            error: false 
            // character: {},
            // family:{},
            // personal:{},
            // id: this.$route.params.id
        }
    },
    methods: {
        fetchtodos(){
            fetch(`https://dattebayo-api.onrender.com/characters/${this.id}`)
            .then(response => {
                if (!response.ok){
                    throw new Error("Network error");
                }
                return response.json();
            })
            .then(data => {
                this.character = data;
                this.loading = false;
                console.log(this.character)
            })
            .catch(() => {
                this.error = true;
                this.loading = false;
            }
        )
        }
    },
    mounted(){
        this.fetchtodos(); 
    },
    // quando tiver alteração na variável 'id', chama o método fetchtodos novamente
    watch: {
        id (){
            this.fetchtodos();
        }
    }
}
</script>

<style>

</style>