import { createRouter, createWebHistory } from "vue-router";
import AreaCirculo from "./components/AreaCirculo.vue";
import AreaTrapezio from "./components/AreaTrapezio.vue";
import AreaTriEqui from "./components/AreaTriEqui.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HelloWorld
    },
    {
        path: "/circulo",
        name: "areacirculo",
        component: AreaCirculo
    },
    {
        path: "/trapezio",
        name: "areatrapezio",
        component: AreaTrapezio
    },
    {
        path: "/triangulo",
        name: "areatriangulo",
        component: AreaTriEqui
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

