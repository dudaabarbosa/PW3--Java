import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./components/Pages/AboutPage.vue";
import HomePage from "./components/Pages/HomePage.vue";
import ContactPage from "./components/Pages/ContactPage.vue";
import LoginPage from "./components/Pages/LoginPage.vue";
import FetchNaruto from "./components/FetchNaruto.vue";
import InfoCharacters from "./components/InfoCharacters.vue";

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
    },
    {
        path: "/naruto",
        name: "Naruto",
        component: FetchNaruto
    },
    {
        path: "/:id",
        name: "Informações",
        props: true,
        component: InfoCharacters
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;