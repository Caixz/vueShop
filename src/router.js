import vueRouter from 'vue-router'
import home from '../components/tabel/home.vue'
import news from '../components/tabel/news.vue'
import set from '../components/tabel/set.vue'
import shopcar from '../components/tabel/shopcar.vue'
import newslist from '../components/home/newslist.vue'
import subnewslist from '../components/home/subnewslist.vue'
import imageS from '../components/imageShare/imageS.vue'
import imageInfo from '../components/imageShare/imageInfo.vue'
import shopping from '../components/home/shopping.vue'
import shoppinginfo from '../components/home/shoppinginfo.vue'
import introduce from '../components/home/shoppingdetail.vue'
import comit from '../components/home/shoppingcomit.vue'

// 3. 创建路由对象
var router = new vueRouter({
  routes: [
    {path:'/home',component:home},
    {path:'/',redirect:'/home'},
    {path:'/news',component:news},
    {path:'/set',component:set},
    {path:'/shopcar',component:shopcar},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newslist/:id',component:subnewslist},
    {path:'/home/imageShare',component:imageS},
    {path:'/home/imageShare/imageInfo/:id',component:imageInfo},
    {path:'/home/shopping',component:shopping},
    {path:'/home/shopping/shoppinginfo/:id',component:shoppinginfo},
    {path:'/home/shopping/introduce/:id',component:introduce},
    {path:'/home/shopping/comit/:id',component:comit},


  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router