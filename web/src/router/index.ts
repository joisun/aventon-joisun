import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { transition: 'slide-right' },
      component: HomeView,
    },
    {
      path: '/new',
      name: 'newUser',
      meta: { transition: 'slide-left' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/create-user-page.vue'),
    },
  ],
})

export default router
