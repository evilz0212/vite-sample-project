import req from "/@/apis/https.js"

// 定義接口
export const postLogin = (params) =>
	req(
		"post",
		`https://5b84ebcd-cd9d-477f-ae29-cec2dffa0edf.mock.pstmn.io/auth`,
		params
	)
