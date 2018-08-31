import Vue from 'vue'
import Router from 'vue-router'
//home
import Home from '@/components/home/Home'

//daohang
import Daohang from '@/components/daohang/Daohang'

//diary
import Diary from '@/components/diary/Diary'
import DiaryDetial from '@/components/diary/DiaryDetial'

//guide
import Guide from '@/components/guide/Guide'

//social
import Social from '@/components/social/Social'
import SocialDetial from '@/components/social/SocialDetial'
//user
import User from '@/components/user/User'
import Register from '@/components/user/Register'

//zixun
import Zixun from '@/components/zixun/Zixun'
import XinWen from '@/components/zixun/Xinwen'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path:'/daohang',
      name:'daohang',
      component:Daohang,
    },{
      path:'/diary',
      name:'diary',
      component:Diary,
    },{
      path:'/guide',
      name:'guide',
      component:Guide,
    },{
      path:'/social',
      name:'social',
      component:Social
    },{
      path:'/user',
      name:'user',
      component:User,
    },{
      path:'/zixun',
      name:'zixun',
      component:Zixun,
    },{
      path:'/register',
      name:'register',
      component:Register,
    },{
      path:'/diarydetial',
      name:'diarydetial',
      component:DiaryDetial,
    },{
      path:'/socialdetial',
      name:'socialdetial',
      component:SocialDetial,
    },{
      path:'/xinwen',
      name:'xinwen',
      component:XinWen,
    }
]
})
