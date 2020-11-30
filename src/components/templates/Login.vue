<template lang="pug">
.Login
	form(@submit.prevent="login({ username, password })")
		label 
			span Username
			input(name="username", v-model="username")
		label 
			span Password
			input(name="password", v-model="password", type="password")
		.btn-group
			//- router-link(to="/home", costom, v-slot="{ navigate }")
			//-     button(role="link", @click="navigate") login
			button login
</template>

<script setup="props">
import { ref, inject } from "vue";
const store = inject("store");
const services = inject("services");

export const username = ref("Carlos");
export const password = ref("123456");

export const login = (data) => services.user.userLogin(data);
</script>
<style lang="scss" scoped>
</style>
