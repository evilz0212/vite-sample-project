import { createRouter, createWebHistory } from "vue-router"
import { useStore } from "/@/store"

import home from "/@/pages/home.vue"
import contact from "/@/pages/contact.vue"

export const router = createRouter({
	// 設定 baseURL
	history: createWebHistory(import.meta.env.VITE_PROJECT_NAME),
	routes: [
		{
			path: "/",
			component: home,
		},
		{
			path: "/contact",
			component: contact,
			meta: {
				onLogin: true,
				roles: ["admin"],
			},
			// children: [
			// 	{
			// 		path: "support",
			// 		component: support,
			// 	},
			// ],
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			redirect: "/",
		},
	],
})

// 路由權限
router.beforeEach((to, from, next) => {
	const store = useStore()
	const user = store.state.user
	// 登入判斷
	if (to.meta.onLogin) {
		if (user && user.token) {
			// 權限判斷
			if (to.meta.roles && to.meta.roles.indexOf(user.role) === -1) {
				// alert('403)
			} else {
				next()
			}
		} else {
			next({ path: "/" })
		}
	} else {
		next()
	}
})
