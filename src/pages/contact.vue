<template lang="pug">
h1 contact
hr
h3 original: {{ countNumber.count }}
h3 power: {{ powCount }}
button(@click="addCount(2)") addCount
button(@click="multCount(2)") multCount
</template>

<script setup>
import { inject, computed } from "vue";
const store = inject("store");

export const countNumber = computed(() => store.state.countNumber);
export const powCount = computed(() => store.getters.getPowerCount);
export const addCount = (addNumber) => store.commit("addCount", addNumber);
export const multCount = (multNumber) =>
	store.dispatch("multCount", multNumber);
</script>

<style lang="scss" scoped>
</style>