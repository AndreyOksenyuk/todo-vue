import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from './pages/TodoApp.vue'
import Home from './pages/Home.vue'
import Calculator from './pages/Calculator.vue'
import Login from './pages/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
   mode: 'history',
   routes:[
      {
         path: '/',
         name: 'Login',
         component: Login,
      },
      {
         path: '/todo/:id',
         component: () => import('./pages/Mein.vue'),
         children:[
            {
               path:'/calculator',
               component: Calculator
            }, 
            {
               path: '/home',
               name: 'Home',
               component: Home
            },
            {
               path: '/todoApp',
               component: TodoApp
            },
         ]
      },

   ]
})

  