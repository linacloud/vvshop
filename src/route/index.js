import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {path: '/home',
      name: 'Home',
      component: Home
    },
    {path: '/',
      redirect: '/home'
    },
    {path: '/search',
      name: 'Search',
      component: Search
    },
    {path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]

})
