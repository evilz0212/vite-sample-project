<template lang="pug">
.HelloWorld
	h1 {{ msg }}
	button(@click="count++") count is: {{ count }}
	p Edit #[code components/HelloWorld.vue] to test hot module replacement.
</template>

<script setup="props">
import { ref } from "vue";
export const name = "HelloWorld";

export const msg = props.msg;
export const count = ref(0);
</script>
<style lang="scss" scoped>
</style>