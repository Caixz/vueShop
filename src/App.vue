<template>
  <div class="container">
    <!-- header -->
      <mt-header fixed title="大帅锅">
				<span  slot="left" @click="goback" v-show="flag">
   		 <mt-button icon="back">返回</mt-button>
  			</span>
			</mt-header>
    <!-- content -->

	<transition>
			<router-view></router-view>
	</transition>
		  <!-- tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lib" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/news">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">新闻</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/shopcar">
				<span class="mui-icon mui-icon-extra-cart mui-icon-extra ">
					<span class="mui-badge" id="num">{{$store.getters.getTotal}}</span>
					</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/set">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
  
   

  </div>
</template>

<script>
export default {
		data(){
			return {
				flag:false
			}
		},
		created(){
			this.flag = this.$route.path === '/home' ? false : true;
		},
	methods:{	
		goback(){
			this.$router.go(-1);

		}

	},
		watch: {
			"$route.path":function(newVal){
				if(newVal === '/home'){
					this.flag = false;
				}else {
					this.flag = true;
				}
			}
		}
}
</script>

<style lang="scss" scoped>

.container{
  padding-top:40px;
	 padding-bottom:50px;
	overflow-x: hidden;
}

.v-enter{
	opacity: 0;
	transform:translateX(100%)

}
.v-leave-to{
	opacity: 0;
	transform:translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition:all 0.5s ease
}
.mint-header{
	z-index: 99;
}
//修改样式
.mui-bar-tab .mui-tab-item-lib
{
    display: table-cell;
    overflow: hidden;

    width: 1%;
    height: 50px;

    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: #929292;
}
.mui-bar-tab .mui-tab-item-lib.mui-active
{
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon
{
    top: 3px;

    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label
{
    font-size: 11px;

    display: block;
    overflow: hidden;

    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon:active
{
    background: none;
}

</style>
