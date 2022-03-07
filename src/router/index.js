import Vue from 'vue'
import VueRouter from 'vue-router'
const Residence = ()=>import('../views/Residence')
const Show = ()=>import('../views/Show')
const Office = ()=>import('../views/Office')
const Hotel = ()=>import('../views/Hotel')
const Others = ()=>import('../views/Others')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/reside'
  },
  {
    path:'/reside',
    component:Residence
  },
  {
    path:'/show',
    component:Show
  },
  {
    path:'/office',
    component:Office
  },
  {
    path:'/hotel',
    component:Hotel
  },
  {
    path:'/others',
    component:Others
  }
]

const router = new VueRouter({
  routes,
  // linkActiveClass:"active"
})

export default router
