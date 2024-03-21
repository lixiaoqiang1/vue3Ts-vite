import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Admin",
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import('../views/home/index.vue'),
        meta: {
            icon: "el-icon-menu",
            title: "首页"
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
    {
      path: "/shezhi",
      name: "shezhi",
      component: () => import('../views/shezhi/index.vue'),
      meta: {
        icon: "el-icon-menu",
        title: "about"
      }
    },
    {
      path: "/user",
      name: "user",
      component: () => import('../views/user/index.vue'),
      meta: {
        icon: "el-icon-menu",
        title: "user"
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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
 
export default router;