<template lang="pug">
h1 Contact Page
br
//- router-link(to="/", custom, v-slot="{ navigate }") 
//- 	button(role="link", @click="navigate") to home page
button(@click="logout") Logout

button(@click="coinRefresh") Refresh
p Hi, {{ username }}
p 來源：coingecko api
p 查詢時間：{{ searchTime }}
.coinlist
	tr
		th 排序
		th 虛擬貨幣
		th 目前價格(USD)
		th 漲幅(24h)
	tr(v-for="(item, key, index) in coinlist")
		td {{ index }}
		td {{ key }}
		td {{ item.usd }}
		td {{ item.usd_24h_change.toFixed(1) }}%
</template>

<script setup>
import { inject, computed, onMounted } from "vue";
const store = inject("store");
const services = inject("services");

// export const countNumber = computed(() => store.state.countNumber);
// export const powCount = computed(() => store.getters.getPowerCount);
// export const addCount = (addNumber) => store.commit("addCount", addNumber);
// export const multCount = (multNumber) =>
// 	store.dispatch("multCount", multNumber);

export const logout = services.user.userLogout;

export const username = computed(() => store.state.user.name);

export const coinRefresh = services.coin.coinRefresh;
export const coinlist = computed(() => store.state.coin.coinList);
export const searchTime = computed(() => store.state.coin.time);

onMounted(() => {
	coinRefresh();
});
</script>

<style lang="scss" scoped>
.coinlist {
	display: flex;
	flex-direction: column;
	align-items: center;

	tr {
		display: flex;
		justify-content: center;
	}

	th,
	td {
		white-space: nowrap;
		flex: 1 0 100px;
	}
}
</style>