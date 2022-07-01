import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function lazyImport(route: string) {
  return () => import(`../components/pages/${route}/index.vue`)
}

const routes: RouteRecordRaw[] = [
  {
    component: lazyImport('Signup'),
    alias: '/',
    name: 'signup',
    path: '/auth/signup',
  },
  {
    component: lazyImport('Login'),
    name: 'login',
    path: '/auth/login',
  },
  {
    component: lazyImport('Home'),
    name: 'home',
    path: '/dashboard',
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
