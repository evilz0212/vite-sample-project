<template lang="pug">
section.card
	.user
		p {{ username }}
		button.logout(@click="logout")
			img(alt="Logout", src="/@/assets/icons/setting.svg")
	.title
		h2 Cryptocurrency
		h3 CoinGecko
		.banner

	.info
		.coinlist
			tr.bar-h
				th.coin Coin
				th.price Price
				th.change 24h
			tr.bar-i(v-for="(item, key, index) in coinlist")
				td.coin 
					img(:alt="key", :src="`${projectName}/coins/${key}.svg`")
					span {{ key }}
				td.price {{ item.usd.toFixed(2) }}
				td.change {{ item.usd_24h_change.toFixed(1) }}%
		.status.bar-i
			.updateTime
				img(alt="UpdateTime", src="/@/assets/icons/subtract.svg")
				span {{ searchTime }}
			button.refresh(@click="coinRefresh")
				img(alt="Refresh", src="/@/assets/icons/refresh.svg")
</template>

<script setup>
import { inject, computed, onMounted } from "vue";
const store = inject("store");
const services = inject("services");

export const logout = services.user.userLogout;

export const username = computed(() => store.state.user.name);

export const coinRefresh = services.coin.coinRefresh;
export const coinlist = computed(() => store.state.coin.coinList);
export const searchTime = computed(() => store.state.coin.time);

export const projectName = import.meta.env.VITE_PROJECT_NAME;

onMounted(() => {
	coinRefresh();
});
</script>

<style lang="scss" scoped>
img {
	@include size(20px);
}

.user {
	@include flex(fe);
	margin-bottom: 16px;

	.logout {
		margin-left: 15px;
	}
}
.title {
	position: relative;
	overflow: hidden;
	margin-left: -25px;
	margin-right: -25px;
	margin-bottom: 20px;
	padding-top: 5px;
	padding-bottom: 20px;

	@include banner-shadow;

	.banner {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;

		background-image: url("/images/bg-bitcoin.jpg");
		background-size: cover;
		background-position: 0% 25%;
		filter: blur(6px);
	}

	h2,
	h3 {
		margin-left: 25px;
	}
}

.coinlist {
	@include flex(c, sb, col);
}
.bar-h {
	@include flex(sb, fs);
	padding: 10px 15px;
}
.bar-i {
	padding: 20px 15px;
	margin: 8px 0px;

	@include flex(sb, c);

	border-radius: 8px;
	@include btn-shadow();

	background: linear-gradient(
		110deg,
		color(linear-black) -25%,
		color(linear-gray) 130%
	);
}

.coin {
	@include flex(fs);

	text-align: left;
	flex: 1 1 300px;

	img {
		margin-right: 10px;
	}
}
.price {
	text-align: right;
	flex: 1 1 200px;
}
.change {
	text-align: right;
	flex: 1 1 200px;
}

.status {
	padding: 10px 15px;
	margin-top: 35px;
}
.updateTime {
	@include flex(sb, c);
	font-size: 12px;

	img {
		margin-right: 10px;
	}
}
.refresh {
	border-radius: 8px;
	padding: 7px;
	img {
		@include size(16px);
	}
}
</style>