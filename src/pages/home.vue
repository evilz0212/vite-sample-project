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
</style>