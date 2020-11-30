import { api } from "/@/apis/modules"
import { useStore } from "/@/store"
import { router } from "/@/router"

const store = useStore()

export const coinRefresh = () => {
	api.coin.getCoinPrice().then((response) => {
		let res = response.data
		console.log(res)

		store.dispatch("saveCoinList", res)
	})
}
