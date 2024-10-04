<template>  
    <header>
        <nav>
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/sobre">Sobre nós</router-link>
                <router-link to="/contact">Contato</router-link>
            </ul>
        </nav>
    </header>
    <router-view></router-view>
    </template>
    
    <script>
    export default{
        name: 'NavPage'
    }
    </script>
    
    <style>
    
    
    </style>