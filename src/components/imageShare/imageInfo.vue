<template>
  <div class="totle">
    <div class="imageInfoT">
      <h4>{{info.title}}</h4>
      <div class="comTime">
        <span>发表时间 : {{info.add_time | formatTm}}</span>
        <span>点击{{info.click}}次</span>
      </div>
    </div>
    <div class="thumbs">
        <vue-preview :slides="thumbImgList"></vue-preview>    
    </div>
    <!-- 介绍  -->
    <div class="content" v-html="info.content"></div>
    <!-- 评论 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import cmt from "../home/cmt.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: [],
      thumbImgList: []
    };
  },
  created() {
    this.getInfo();
    this.getList();
  },
  methods: {
    getInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.info = result.body.message[0];
        } else console.log("qwe");
      });
    },
    getList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            (item.w = 600), (item.h = 400),(item.msrc = item.src);
          });
          this.thumbImgList = result.body.message;
        }
      });
    }
  },
  components: {
    "cmt-box": cmt
  }
};
</script>
<style lang="scss" scoped>
.imageInfoT {
  border-bottom: 1px solid #999;
  padding: 10px 2px;

  h4 {
    text-align: center;
    font-size: 14px;
    color: #227aff;
    height: 20px;
  }
  .comTime {
    font-size: 12px;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
}
.content {
  font-size: 12px;
  line-height: 30px;
  padding: 0 5px;
}
.imginfo{
    img{
        margin: 5px
    }
}
</style>
