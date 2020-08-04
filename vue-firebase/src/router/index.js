import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      Auth: false,
      title: "Inicio"
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      Auth: false,
      title: "Inicio"
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      Auth: false,
      title: "Registro"
    }
  },


]

const router = new VueRouter({
  routes
})

export default router