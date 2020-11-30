import { api } from "/@/apis/modules"
import { useStore } from "/@/store"
import { router } from "/@/router"

const store = useStore()

export const userLogin = ({ username, password }) => {
	api.user
		.postLogin()
		.then((response) => {
			let res = response.data
			console.log(res)

			store.dispatch("login", { ...res, username })
		})
		.then(() => {
			router.push("/contact")
		})
}

export const userLogout = () => {
	store.dispatch("logout")
	router.push("/")
}
