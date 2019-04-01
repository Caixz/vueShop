<template>
    <div>
       <swiper :tabbarI="tabbarImage" :isfull="true"></swiper>
        <!-- 六宫格 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		            <img src="/src/image/menu1.png">
		            <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imageShare">
		            <img src="/src/image/menu2.png">
		            <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopping">
		             <img src="/src/image/menu3.png">
		            <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		             <img src="/src/image/menu4.png">
		            <div class="mui-media-body">留言反馈</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		            <img src="/src/image/menu5.png">
		            <div class="mui-media-body">视频专区</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		            <img src="/src/image/menu6.png">
		            <div class="mui-media-body">call us</div></router-link></li>
		</ul> 
    </div>
   
</template>
<script>
import { Toast } from 'mint-ui';
import swiper from '../home/swiper.vue'
export default {
    data(){
        return{
           tabbarImage:[]
        }
    },
    created(){
        this.getImage()
    },
    methods:{
        getImage(){
            this.$http.get('api/getnewslist').then(result=>{
                if(result.body.status===0){
                    this.tabbarImage = result.body.message
                 
                }else{
                    Toast('加载图片失败');
                }
            })
        }
    },
    components:{
        "swiper":swiper
    }
}
</script>

<style lang="scss" scoped>
    
   .mui-table-view{
       border: 0;
       background-color: #fff;
       img{
           width: 60px;
           height: 60px;
       }
       

   }
  
</style>



