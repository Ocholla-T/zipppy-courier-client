import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function lazyImport(route: string) {
  return () => import(`../components/pages/${route}/index.vue`)
}

const routes: RouteRecordRaw[] = [
  {
    component: lazyImport('Signup'),
    alias: '/',
    path: '/auth/signup',
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
