import req from "/@/apis/https.js"

// 定義接口
export const getCoinPrice = (params) =>
	req(
		"get",
		`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd&include_24hr_change=true
		`,
		params
	)
