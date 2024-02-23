import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "adminHome",
    component: () => import('../views/adminHome.vue'),
    children: [
        {
          path: "/about",
          name: "about",
          component: () => import('../views/about/index.vue'),
          meta: {
            icon: "el-icon-menu",
            title: "about"
          }
        },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import('../views/login/index.vue'),
    meta: {
      icon: "el-icon-menu",
      title: "login"
  }
  },
  

];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;