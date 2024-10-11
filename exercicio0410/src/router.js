import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./components/Pages/AboutPage.vue";
import HomePage from "./components/Pages/HomePage.vue";
import ContactPage from "./components/Pages/ContactPage.vue";
import LoginPage from "./components/Pages/LoginPage.vue";

const routes = [
    {
        path: "/",
        name: "Page",
        component: LoginPage
    },
    {
        path: "/Home",
        name: "Home",
        component: HomePage
    },
    {
        path: "/sobre",
        name: "Sobre nós",
        component: AboutPage
    },
    {
        path: "/contact",
        name: "Contato",
        component: ContactPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;