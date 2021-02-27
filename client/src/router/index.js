import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Auth',
    component: ()=> import('../views/Auth.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component:()=> import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/produits',
    name:'Produits',
    component: ()=> import('../views/Produits.vue'),
  },
  {
    path:'/nouveauProduit',
    name:'NouveauProduit',
    component: ()=>import('../components/NouveauProduit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
