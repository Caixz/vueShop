<template>
	<div>
				<!-- 小球 -->
    <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
      <span class="ball" v-show="ballFlag" ref="ball"></span>
    </transition>


  <div class="info-content">
    
    <!-- 轮播图部分 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :tabbarI="tabbarS" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{shopDetail.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价:
            <span class="old">￥{{shopDetail.market_price}}</span>
            &nbsp;&nbsp;销售价:
            <span class="new">￥{{shopDetail.sell_price}}</span>
          </p>
          <div class="num">
            购买数量：
            <numbox @postnum="getnum" :max="shopDetail.stock_quantity"></numbox>	
          </div>

          <mt-button type="primary" size="small">立刻购买</mt-button>
          <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <!-- 参数设置 -->
    <div class="mui-card">
      <div class="mui-card-header">商品的参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品型号：{{shopDetail.goods_no}}</p>
          <p>库存情况：{{shopDetail.stock_quantity}}件</p>
          <p>上架时间：{{shopDetail.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="introduce(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="comit(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
		</div>
</template>
<script>
import swiper from "./swiper.vue";
import numBtn from "./numBtn.vue"
export default {
  data() {
    return {
      tabbarS: [],
      id: this.$route.params.id,
      shopDetail: [],
			ballFlag: false,
			num:1
    };
  },
  created() {
    this.getImg();
    this.getshopDetail();
  },
  methods: {
    getImg() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img_url = item.src;
          });
          this.tabbarS = result.body.message;
        }
      });
    },
    getshopDetail() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.shopDetail = result.body.message[0];
        }
      });
    },
    introduce(id) {
      this.$router.push("/home/shopping/introduce/" + id);
    },
    comit(id) {
      this.$router.push("/home/shopping/comit/" + id);
    },
    addShopcar() {
      this.ballFlag = !this.ballFlag; //控制小球
     
    //  把数据存进vuex
      var carinfo = {
        id:  this.id,
        num: this.num,
        price: this.shopDetail.sell_price,
        selected:true
      
      }

      this.$store.commit('postCar',carinfo)
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
			el.offsetWidth;
			 //适配不同屏幕
			
			var ballObjS = this.$refs.ball.getBoundingClientRect();
			var ballObjE = document.getElementById("num").getBoundingClientRect();
			var x = ballObjE.left - ballObjS.left;
			var y = ballObjE.top - ballObjS.top;
			 
      el.style.transform = `translate(${x}px,${y}px)`
      el.style.transition = "all 0.5s cubic-bezier(.28,-0.35,1,.32)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
		},
		getnum(data){
			this.num = data;
		
		}
  },
  components: {
		swiper: swiper,
		numbox: numBtn
  }
};
</script>
<style lang="scss" scoped>
.info-content {
  background-color: #eee;
  overflow: hidden;
  .mui-card {
    .num {
      color: #8f8f94;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .old {
      text-decoration: line-through;
    }
    .new {
      color: red;
      font-weight: 700;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
  
}
.ball {
    position: absolute;
    left: 153px; //238
    top: 407px; //32
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
  }
</style>



