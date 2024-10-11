<template>  
    <header>
        <nav>
            <ul>
                <router-link class="links" to="/Home">Home</router-link>
                <router-link class="links" to="/sobre">Sobre nós</router-link>
                <router-link class="links" to="/contact">Contato</router-link>
            </ul>
        </nav>
    </header>
    
    </template>
    
    <script>
    export default{
        name: 'NavPage'
    }
    </script>
    
    <style>
    .links{
        margin: 30px;
    }
    
    </style>