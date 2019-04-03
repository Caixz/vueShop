
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
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



import {Header,Swipe, SwipeItem,Button,Lazyload,Switch } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);

var car = JSON.parse(localStorage.getItem('car') || '[]')
// 创建公共存储仓库实例
var store = new Vuex.Store({
   state:{
      car: car
   },
   mutations:{
      postCar(state,info){
          var flag = false //用来表示car中是否存在该商品
         state.car.some(item =>{
            if(item.id == info.id){
               item.num += info.num;
               flag = true;
               return item
            }
         })
         if(!flag){
            state.car.push(info)
         }
         localStorage.setItem('car',JSON.stringify(state.car));

      },
      updata(state,obj){
      //   !!!!!!!!!!!!!!
         state.car.some(item =>{
            if(item.id == obj.id) {
            item.num = parseInt(obj.num)
           
            return true;
         }
         })
      localStorage.setItem('car',JSON.stringify(state.car));

      },
      delgood(state,id){
         state.car.some((item,i) =>{
            if(item.id == id){
               state.car.splice(i,1);
               return true;
            }
         })
         localStorage.setItem('car',JSON.stringify(state.car))
      },
      changSel(state,sel){
         state.car.some(item =>{
            if(item.id == sel.id){
               item.selected = sel.selected;
               return true;
            }
         })
         localStorage.setItem('car',JSON.stringify(state.car))
      }
   },
   getters:{
      getTotal(state){
         
        var total = 0 ;//物品总数
         state.car.forEach(item =>{
            total += item.num;
         })
         return total;
      },
      getGoodsnum(state){
         var o = {};
         state.car.forEach(item =>{
            o[item.id] = item.num;
         })
         return o;
      },
      getSwitchSta(state){
         var o = {};
         state.car.forEach(item =>{
            o[item.id] = item.selected;
         })
         return o;
      },
      getAmount(state){
         var o = {
            count : 0,
            total :0
         }
         state.car.forEach(item =>{
            if(item.selected){
               o.count +=item.num
               o.total +=item.price * item.num;

            }
          
         })
         return o;
      }
      

   }
})


var vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router,
    store
})