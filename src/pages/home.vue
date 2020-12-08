<template lang="pug">
section.card
	.banner
	h1 Welcome
	Login
	//- router-link(to="/contact", custom, v-slot="{ navigate }") 
	//- 	button(role="link", @click="navigate") to contact page
</template>

<script setup>
</script>

<style lang="scss" scoped>
.banner {
	margin: -25px -25px 20px -25px;
	min-height: 165px;

	border-radius: 45px 45px 0px 0px;
	overflow: hidden;

	background-image: url("/images/bg-bitcoin.jpg");
	background-size: cover;
	background-position: 0% 20%;
}
</style>