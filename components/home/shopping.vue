<template>
  <div class="shop">
    <div class="shopList" v-for="item in goodList" :key="item.id" @click="info(item.id)">
      <img :src="item.img_url">
      <h1>{{item.title}}</h1>
      <div class="shopDetail">
        <div class="price">
          <span class="now">￥ {{item.sell_price}}</span>
          <span class="old">￥ {{item.market_price}}</span>
        </div>
        <div class="odd">
          <span class="selling">热卖中</span>
          <span class="lef">剩{{item.stock_quantity}}件</span>
        </div>
      </div>
    </div>
    <!-- //评论 -->
    <mt-button type="danger" size="large"  @click="goodLoad">加载更多</mt-button>
 
  </div>
</template>
<script>
export default {
  data(){
    return {
      pageindex:1,
      goodList:[]
    }
   
  },
  created(){
    this.getGoodList();
  },
  methods:{
    getGoodList(){
      this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result =>{
        if(result.body.status ===0){
          this.goodList = this.goodList.concat(result.body.message);
        }else console.log('获取失败')
      })
    },
    goodLoad(){
      this.pageindex++;
      this.getGoodList();
    },
    info(id){
    this.$router.push('/home/shopping/shoppinginfo/' + id)
    }
    }
};
</script>
<style lang="scss" scoped>
.shop {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 7px;
  .shopList {
    width: 49%;
    border: 1px solid #cccccc;
    box-shadow: 0 0 7px #ccc;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 277px;
    img {
      width: 100%;
    }
    h1{
        font-size: 14px;
  
    }
    .shopDetail{
         padding: 0 5px;
        background-color:#ccc;
       .now{
           font-size:16px;
           font-weight: 700;
           color:red;
       }
       .old{
           font-size:12px;
           text-decoration: line-through;
           margin-left:14px;
       }
       .odd{
           display: flex;
           justify-content: space-between;
           font-size:13px;
          height: 26px;
       }

    }
  }
}
</style>
