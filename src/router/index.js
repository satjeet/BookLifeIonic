import { createRouter, createWebHistory } from '@ionic/vue-router';
import Booklife from '../views/Booklife.vue'


const routes = [
  {
    path: '/',
    redirect: '/booklife'
  },
  {
    path: '/booklife',
    name: 'BookLife',
    component: Booklife
  },
  {
    path: '/booklife/:category',
    name: 'Pilares',
    component:()=>import('../views/Pilares.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
