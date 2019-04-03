<template>
    <div>
         <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in tabbarI" :key="item.img_url">
                <img :src="item.img_url" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["tabbarI","isfull"]
}
</script>
<style lang="scss" scoped>
.mint-swipe{
        height: 200px;
        text-align:center;
        img{
          height: 100%;
    }
         .full{
            width:100%;
          }
    }
    
</style>
