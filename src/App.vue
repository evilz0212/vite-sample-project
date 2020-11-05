<template lang="pug">
img(alt="Vue logo", src="./assets/logo.png")
router-view
</template>

<script setup>
import { provide } from "vue";
import { useStore } from "/@/store";
export const name = "App";

provide("store", useStore());
</script>
<style lang="scss">
// Demo Style
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

button {
	background-color: #ffffff;
	border: 1px solid #aaa;
	border-radius: 5px;
	padding: 5px 10px;
	color: #2c3e50;
	&:hover {
		cursor: pointer;
		background-color: rgba(#000, 0.03);
	}
}
</style>