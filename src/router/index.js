import { createRouter, createWebHistory } from "vue-router"
import home from "/@/pages/home.vue"
import contact from "/@/pages/contact.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: home,
        },
        {
            path: "/contact",
            component: contact,
            // children: [
            //     {
            //         path: "support",
            //         component: support,
            //     },
            // ],
        },
    ],
})
