<template lang="pug">
h1 home
HelloWorld(msg="Hello Vue 3.0 + Vite")
br
router-link(to="/contact", custom, v-slot="{ navigate }") 
    button(role="link", @click="navigate") to contact page
</template>

<script setup>
</script>

<style lang="sass">
#app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
button
    background-color: #ffffff
    border: 1px solid #aaa
    border-radius: 5px
    padding: 5px 10px
</style>