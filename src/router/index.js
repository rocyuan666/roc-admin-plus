import { createRouter, createWebHashHistory } from "vue-router";

const Login = () => import("@/views/login");
const Index = () => import("@/views/index");

const constantRoutes = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页",
    },
    component: Index,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

router.beforeEach((to, form, next) => {
  const token = localStorage.getItem("token");
  if (to.path == "/login") {
    return next();
  }
  if (token) {
    return next();
  } else {
    return next("/login");
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
