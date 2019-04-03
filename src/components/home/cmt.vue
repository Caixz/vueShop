<template>
    <div class="cmt-box">
        <h3>发表评论</h3>
        <textarea placeholder="开始你的演讲(最多120个字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postcmt">发表评论</mt-button>
        <div class="cmt-lists">
            <div class="cmt-item" v-for="(item,i) in cntItem" :key="i">
                <div class="cmt-title">
                    第{{i+1}}楼 &nbsp; &nbsp;用户 : {{item.user_name}}&nbsp; &nbsp;发表时间:{{item.add_time | formatTm}}
                </div>
                <div class="cmt-content">
                   {{item.content.trim() =='undefined' ? '此用户太懒' : item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="load">加载更多</mt-button>
    </div>
   
</template>

<script>
import { Toast } from 'mint-ui'; 
export default {
    data(){
        return {
           pageindex : 1 ,
           cntItem:[],
           msg:''
        }
    },
    created(){
        this.getCmt()
    },
    methods:{
        getCmt(){
           this.$http.get('api/getcomments/'+ this.id + '?pageindex=' + this.pageindex).then(result =>{
               if(result.body.status ===0){
                   this.cntItem = this.cntItem.concat(result.body.message);
                  
               }else Toast('获取失败')
           })
        },
        load(){
           this.pageindex ++; 
           this.getCmt()
        },
        postcmt(){
            this.$http
            .post("api/postcomment/" + this.id,{
                content: this.msg.trim()})
            .then(result =>{
                if(result.body.status ===0){
                var con = {
                   user_name : '匿名用户',
                   add_time : Date.now() ,
                   content : this.msg.trim()
                }
                this.cntItem.unshift(con)
                
                this.msg = ''
                }else Toast('评论失败')
            })
        }
    },
    props:["id"]
}
</script>
<style lang="scss" scoped>
    .cmt-box{
        h3{
            font-size: 18px;
            border-bottom: 1px solid #999;
            padding-bottom:10px;
        }
        textarea{
            font-size: 14px;
            height:100px;
            margin: 0
        }
        .cmt-item{
            font-size: 14px;
        
             .cmt-title{
            background-color: #aaa;
            margin: 5px 0;
        }
             .cmt-content{
            text-indent: 2em;
            margin: 10px 0;
            height:20px;
            }
        }
    }
</style>
