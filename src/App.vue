<template lang="pug">
router-view
</template>

<script setup>
import { provide } from "vue";
import { useStore } from "/@/store";
import { services } from "/@/services";
export const name = "App";

provide("store", useStore());
provide("services", services);
</script>

<style lang="scss">
</style>