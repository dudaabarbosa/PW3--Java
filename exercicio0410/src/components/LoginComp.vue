<template>
    <h2>LOGIN</h2>
<form @submit.prevent="logar">
<input type="email" placeholder="Email">
<br>
<input type="password" placeholder="Senha">
<br>
<input type="submit" value="Logar">
</form>
</template>

<script>
export default {
    name: "LoginComp",
    methods: {
        logar(){
            this.$router.push({path:'/Home'})
        }
    }
}
</script>

<style>

</style>