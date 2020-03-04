import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Animals from "./views/Animals";
import Employees from "./views/Employees";
import Products from "./views/Products";
import Services from "./views/Services";

Vue.use(VueRouter);

let router = new VueRouter({
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            as: '/inicio',
            redirect: '/animais',
            name: "home",
            component: Home
        },
        {
            path: "/animais",
            name: "animals",
            component: Animals
        },
        {
            path: "/funcionarios",
            name: "employees",
            component: Employees
        },
        {
            path: "/produtos",
            name: "products",
            component: Products
        },
        {
            path: "/servicos",
            name: "services",
            component: Services
        },
    ]
});

export default router;