<template>
<form @submit.prevent="handleSubmit"> 
    <label>Digite seu email:</label> 
    <input type="text" placeholder="Email">
    <br>
    <label>Selecione o assunto:</label>
    <select name="Assunto" id="Assunto">
    <option value="Duvidas">Dúvidas</option>
    <option value="Reclamacao">Reclamação</option>
    <option value="maisinfo">Mais informações</option>
    </select>
    <br>
    <label>Digite a mensagem:</label>
    <textarea name="Mensagem" id="Mensagem"></textarea>
    <br>
    <input type="submit" value="Enviar">
</form>

<div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
        <h3>Mensagem enviada!</h3>
        <p>Sua mensagem foi enviada com sucesso, logo você receberá retorno</p>
        <button @click="closeModal" class="close-button">Fechar</button>
    </div>
</div>

</template>

<script>
export default {
    name: "FormContact",
    data(){
        return {
            showModal: false,
        }
    }, 
    methods: {
        handleSubmit(){
            this.showModal= true
        },
    closeModal(){
        this.showModal = false
        }
    }
}
</script>

<style>
label{
    margin: 20px;
}
.modal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.close-button{
    margin: auto;
    width: 15%;
}
</style>