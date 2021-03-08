import req from "/@/apis/https.js"

// 定義接口
export const postLogin = (params) =>
	req("post", `https://29d35f3e-c32e-4ba6-b199-8a876339d448.mock.pstmn.io/auth`, params)
