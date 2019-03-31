import Vue from 'vue'
import App from './App.vue'
//导入vue-router

import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './router.js'

import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.http.options.root='http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON = true
// defalut install图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


import moment from 'moment'
Vue.filter('formatTm',function(datastr,pattern="YYYY-MM-DD hh-mm-ss"){
   return moment(datastr).format(pattern)
})

//导入mint Ui组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/golbal.css'



import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.use(Lazyload);

var vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router
})