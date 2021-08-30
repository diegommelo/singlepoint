import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { guest: true },
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () => import("../views/Dashboard/Profile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    meta: { guest: true },
  },
  {
    path: "*",
    redirect: "/login",
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next(`/profile/${store.getters.getUserId}`);
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
