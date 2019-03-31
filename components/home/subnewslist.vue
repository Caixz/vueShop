<template>
    <div class="subinfo-content">
        <!-- 头部 -->
        <h3 class="title">{{listInfo.title}}</h3>
        <p class="sub-title">
            <span>发表时间:{{listInfo.add_time | formatTm}}</span>
            <span>点击{{listInfo.click}}数</span>
        </p>
        <!-- 内容 -->
        <div class="content" v-html="listInfo.content"></div>
        <!-- 评论区 子组件 -->
            <cmt-box :id="this.id"></cmt-box>
    </div>

</template>
<script>
import cmt from './cmt.vue'
import { Toast } from 'mint-ui'; 
export default {
    data(){
       return {
          id : this.$route.params.id,
          listInfo :[] 
       }
     
    },
    created(){
        this.getListInfo()
    },
    methods:{
        getListInfo(){
            this.$http.get('api/getnew/' + this.id).then(result => {
                if(result.body.status ===0){
               this.listInfo = result.body.message[0]
                }else Toast('获取内容失败')
            })
        }   
       },
    components:{
        'cmt-box':cmt
    }
}
   
</script>
<style lang="scss">
    .subinfo-content{
        padding:0 4px;
        .title{
            font-size: 14px;
            text-align:center;
            color: red;
            margin:15px 0px
        }
        .sub-title{
            display:flex;
            justify-content:space-between;
            border-bottom: 1px solid #999;
            padding-bottom: 10px;
            span{
                color:#226aff;
                font-size:13px
            }
        }
    }
</style>
