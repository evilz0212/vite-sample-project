import path from "path";
export default {
    alias: {
        // JS import 取代為絕對路徑
        "/@/": path.resolve(__dirname, "./src"),
    },
};
