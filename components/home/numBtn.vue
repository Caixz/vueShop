<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="number" @change="post">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../src/lib/mui/js/mui.min.js";
export default {
  data() {
    return {};
  },
  methods: {
    post() {
      this.$emit("postnum", parseInt(this.$refs.number.value));
    }
  },
  //    初始化numbox
  mounted() {
    mui(".mui-numbox").numbox();
  },
  props: ["max"],
  watch: {//监听。
    max: function(newval, oldval) {
      console.log(this.max);
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newval);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
