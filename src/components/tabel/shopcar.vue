<template>
    <div class="shopcar">
        <div class="mui-card" v-for="(item,i) in shoplist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                       <div class="content">
                       <mt-switch v-model="$store.getters.getSwitchSta[item.id]"
                       @change="changSelect(item.id,$store.getters.getSwitchSta[item.id])"
                       ></mt-switch>
                     <img :src="item.thumb_path">
                       <div class="info">
                          <h3>{{ item.title}}</h3>
                          <p>
                              <span class="price">￥ {{item.sell_price}}</span>
                            <numbox :number="$store.getters.getGoodsnum[item.id]" :goodId="item.id"></numbox>
                              <a class="del" href="#" @click.prevent="del(item.id,i)">删除</a>
                          </p>
                          </div>
                       </div>
					</div>
				</div>
		</div>
       
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <div class="pay">
                        <div class="payNum">
                            <p>总计 ( 不含运费 )</p>
                            <p>已勾选商品 <span>{{this.$store.getters.getAmount.count}}</span> 件，总价 <span>￥ {{this.$store.getters.getAmount.total}}</span></p>
                        </div>
                        <div class="payfor">
                            <mt-button type="danger">去结算</mt-button>
                        </div>
                        </div>
					</div>
				</div>
		</div>
    </div>
   
    
</template>
<script>
import numbox from '../home/shopcar_numbtn.vue'
export default {
    data(){
        return {
            shoplist:[]
        }
    },
    created(){
        this.getshopList()
    },
    methods:{
        getshopList(){
            var idArr = []
            this.$store.state.car.forEach(item => idArr.push(item.id));
            if(idArr.length <=0) return;
            this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result =>{
                if(result.body.status ===0){
                    this.shoplist = result.body.message;
                }
            })
        },
        del(id,index){
            this.shoplist.splice(index,1);
            this.$store.commit('delgood',id)

        },
        changSelect(id,sel){
            this.$store.commit('changSel',{id,selected:sel})
        }
    },
    components:{
        'numbox':numbox
    }
}
</script>
<style lang="scss" scoped>
.shopcar{
    .content{
        display:flex;
        align-items:center;
    img{
        width: 60px;
        height:60px;
    }
    h3{
        font-size:13px;
        margin-bottom: 15px;
    }
    .price{
        color:red;
        font-weight: 700;
    }
    .del{
        color:#226aff;
        
    }

    }
    .pay{
        display:flex;
        justify-content: space-between;
        align-items:center;
        .payNum{
            span{
                color:red;
                font-weight:700;
            }
        }
    }
}
</style>