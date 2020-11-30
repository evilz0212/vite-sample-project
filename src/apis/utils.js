import { router } from "/@/router"

// 提示錯誤
export const tip = (msg) => {
	console.log(`error: ${msg}`)
}

// 跳轉到 403 頁面
export const to403Page = () => {
	router.replace({
		name: "403",
	})
}
