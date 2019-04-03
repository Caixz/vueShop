<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="number" ref="number" @change="updataNumber">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  data() {
    return {};
  },
  methods: {
   updataNumber(){
     this.$store.commit("updata",{id:this.goodId, num:this.$refs.number.value})
   }
  },
  //    初始化numbox
  mounted() {
    mui(".mui-numbox").numbox();
  },
  props: ['number','goodId']
  
};
</script>
<style lang="scss" scoped>
</style>
