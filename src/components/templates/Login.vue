<template lang="pug">
.Login
	form(@submit.prevent="login({ username, password })")
		label User
		input(name="username", v-model="username", placeholder="Enter your ID")
		label Password
		input(
			name="password",
			v-model="password",
			type="password",
			placeholder="・・・・・・・・"
		)
		.btn-group
			button Login
</template>

<script setup="props">
import { ref, inject } from "vue";
const store = inject("store");
const services = inject("services");

export const username = ref("Carlos");
export const password = ref("");

export const login = (data) => services.user.userLogin(data);
</script>
<style lang="scss" scoped>
.Login {
	@include size(100%);
	@include flex(fs, st);
}

button {
	margin-bottom: 20px;
	@include btn-linear(Accent);
}
</style>
