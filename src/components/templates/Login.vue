<template lang="pug">
.Login
    p =============
    h4 Login

    form(@submit.prevent="login({ username, password })")
        label 
            span Username
            input(name="username", v-model="username")
        label 
            span Password
            input(name="password", v-model="password")
        .btn-group
            //- router-link(to="/home", costom, v-slot="{ navigate }")
            //-     button(role="link", @click="navigate") login
            button login
</template>

<script setup="props">
import { ref } from "vue";
import { useStore } from "/@/store";
const store = useStore();

export const username = ref("");
export const password = ref("");

export const login = (loginAccount) => {
    // console.log(loginAccount);
    // console.log(username.value);
    store.dispatch("login", loginAccount);
};
</script>
<style lang="sass" scoped>
</style>
