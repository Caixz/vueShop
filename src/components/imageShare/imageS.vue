<template>
    <div class="image-content">
    <div id="slider" class="mui-slider">
	  	<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a :class="['mui-control-item',item.id ==0 ? 'mui-active' :'']" v-for="item in imaTitle" :key="item.id" @click="getImage(item.id)">
					{{item.title}}
				</a>
			
			</div>
	 	</div>
		 	<ul class="item-ul">
  			<router-link v-for="item in image" :key="item.id" tag="li" :to="'/home/imageShare/imageInfo/' + item.id">
   			<img v-lazy="item.img_url">
				 <div class="sub-content">
					 <div class="sub-title">
						 {{item.title}}
					 </div>
					 	<div class="sub-zhaiyao">
							 {{item.zhaiyao}}
						 </div>
				 </div>
  			</router-link>
			</ul>

	</div>
    </div>
</template>
<script>
 import mui from '../../lib/mui/js/mui.min.js'//要回到本来的目录

export default {
			data(){
				return {
					imaTitle:[],
					image:[]
				}
			},
			 	mounted() {
    	// 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
        mui('.mui-scroll-wrapper').scroll({
          deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
		},
		created(){
			this.getImaTitle();	
			this.getImage(0)
		},
			methods:{
				getImaTitle(){
					this.$http.get('api/getimgcategory').then(result =>{
						if(result.body.status ===0){
							result.body.message.push({ title:'全部', id:	0 })
							this.imaTitle = result.body.message.reverse() 
						}else console.log('default')
					})
				},
				getImage(id){
					this.$http.get('api/getimages/' + id).then(result =>{
					if(result.body.status ===0){
							this.image = result.body.message;

					}
					})
				}
			}
    
		
}
</script>
<style lang="scss" scoped>
*{
	 touch-action: none; 
}

.item-ul{
	list-style:none;
	margin: 0;
	padding:10px;
	box-shadow:0 0 10 #999;
	
	li{
		position:relative;
		padding-bottom: 5px;
	

		img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
	}
	 img{

		 width: 100%;
		 
	}
	.sub-content{
		padding: 5px;
		position: absolute;
		bottom: 15px;
		font-weight: 500;
		color:#fff;
		font-size: 14px;
		background-color: rgba(0,0,0,0.4);
		max-height: 84px;
	}
}}
</style>
