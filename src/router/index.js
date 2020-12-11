import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index.vue'
import Login from '../pages/Login.vue'
import UserList from '../pages/user/UserList.vue'
import Picture from '../pages/picture/picture.vue'
import PicList from '../pages/picture/picList.vue'
import Category from '../pages/category/category.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {path: '/login', component: Login},
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index,
      children:[
        {path: '', component: Picture},
        {path: '/Picture', component: Picture},
        {path: '/PicList', component: PicList},
        {path: '/Category', component: Category},
        {path: '/UserList', component: UserList}
      ]
    }
  ]
})
// 路由守卫
router.beforeEach((to,from,next) => {
  let isLogin = sessionStorage.jdAdminToken ? true : false
  if (to.path === '/login' || isLogin) return next()
  next('/login')
})

export default router