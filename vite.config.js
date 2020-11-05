import path from "path"

export default {
	// 編譯更換基礎路徑
	base: "",
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
}
