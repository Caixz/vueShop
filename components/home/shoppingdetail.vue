<template>
    <div class="all">
        <h3>{{info.title}}</h3>
        <div class="info" v-html="info.content">
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:[]
        }
    },
    created(){
        this.getinfo()
    },
    methods:{
        getinfo(){
            this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(result =>{
                if(result.body.status ===0){
                    this.info = result.body.message[0]
                }
            })
        }
    }
}
</script>
<style lang="scss">
.all{
    h3{
        color:#226aff;
        font-size: 16px;
        text-align:center;
        border-bottom:1px solid #333;
        padding: 15px 0;
    }
   
    }
    .info{
     img{
        width: 100%;
        height: auto;
        
    }
}
</style>
