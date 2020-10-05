import path from "path";
const packageJson = require("./package.json");

export default {
    // 編譯更換基礎路徑
    base: "/" + packageJson.name + "/",
    alias: {
        // JS import 取代為絕對路徑
        "/@/": path.resolve(__dirname, "./src"),
    },
    cssPreprocessOptions: {
        // helpers->載入到所有 sass(包含vue組件)
        // helpers 不放入任何class以免重複載入
        sass: {
            additionalData: `
        @import ./src/styles/_prepend.sass
    `,
        },
        scss: {
            additionalData: `
        @import "./src/styles/_prepend.sass";
    `,
        },
    },
};
