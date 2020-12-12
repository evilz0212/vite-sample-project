import path from "path"
const fs = require("fs")
const dotenv = require("dotenv")

const envFiles = [
	// /** default file */ `.env`,
	/** mode file */ `.env.${process.env.NODE_ENV}`,
]

for (const file of envFiles) {
	const envConfig = dotenv.parse(fs.readFileSync(file))
	for (const k in envConfig) {
		process.env[k] = envConfig[k]
	}
}

export default {
	// 編譯更換基礎路徑
	base: process.env.VITE_PROJECT_NAME,
	alias: {
		// JS import 取代為絕對路徑
		"/@/": path.resolve(__dirname, "./src"),
	},
	cssPreprocessOptions: {
		// helpers->載入到所有 scss(包含vue組件)
		// helpers 不放入任何class以免重複載入
		scss: {
			additionalData: `
        @import "./src/styles/_prepend.scss";
    `,
		},
	},
	open: true,
}
