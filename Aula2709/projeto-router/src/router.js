import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoopComponent from "./components/LoopComponent.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HelloWorld
    },
    {
        path: "/loop",
        name: "Loop",
        component: LoopComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;