import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect: '/exposure',
  },
  {
    path:'/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path:'/exposure',
    name:'exposure',
    component:() =>import('@/views/Exposure.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
