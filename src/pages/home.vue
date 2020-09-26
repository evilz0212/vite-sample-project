<template lang="pug">
h1 home
hr
router-link(to="/contact", custom, v-slot="{ navigate }") 
    button(role="link", @click="navigate") to contact page
</template>

<script setup>
</script>

<style lang="sass" scoped>
</style>