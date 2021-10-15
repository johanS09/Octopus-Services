import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CrearServicio from '../views/CrearServicio.vue'
import Login from '../views/Login.vue'
import ListaServicios from '../views/ListaServicios.vue'
import Registro from '../views/Registro.vue'
import NuevoServicio from '../views/NuevoServicio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/crearServicio',
    name: 'crearServicio',
    component: CrearServicio
  },
  {
    path: '/nuevoServicio',
    name: 'nuevoServicio',
    component: NuevoServicio
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/listaServicios',
    name: 'listaServicios',
    component: ListaServicios
  },
  /* {
    path: '/servicios',
    name: 'servicios',
    component: () => import('../views/Servicios.Vue')
  } */,
  {
    path: '/serviciosUsuario',
    name: 'serviciosUsuario',
    component: () => import('../views/ServiciosUsuario.vue')
  },
  
  {
    path: '/verServicio',
    name: 'verServicio',
    component: () => import('../views/VerServicio.vue'),
    //props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
