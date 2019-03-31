<template>
    <div>
         <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in tabbarImage" :key="item.img_url">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["tabbarImage"]
}
</script>
<style lang="scss" scoped>
.mint-swipe{
        height: 200px;
         img{
            width:100%;
            height: 100%;}
    }
</style>
