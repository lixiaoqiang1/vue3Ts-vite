import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: () => import('../views/Homepage.vue'),
    children: [
        {
            path: "/ceshi",
            name: "ceshi",
            component: () => import('../views/ceshi/index.vue'),
            meta: {
                icon: "el-icon-menu",
                title: "ceshi"
            }
        },
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