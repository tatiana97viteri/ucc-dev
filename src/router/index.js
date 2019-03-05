import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home";
import Experiences from "@/views/experiences";

Vue.use(Router);

export default new Router({
    mode: "history",
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
    routes: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/experiencias",
        name: "Experiences",
        component: Experiences
      },
    //   {
    //     path: "/comunidad",
    //     name: "Community",
    //     component: Community
    //   },
    //   {
    //     path: "/experiencias",
    //     name: "Experiences",
    //     component: Experiences
    //   }
    ]
  });