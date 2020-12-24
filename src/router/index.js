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
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/auth/Ingreso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
