<template>
  <div class="hello">
    <textarea ref='myMsg' name="msginfo" id="" cols="30" rows="10" :value=msg></textarea>
    <button @click="update">修改</button>

    <RenderTest tag="ul"></RenderTest>
    <RenderComponent></RenderComponent>

  </div>
</template>

<script>
import RenderTest from "../view/render-test/index.vue";
import RenderComponent from "../view/render-component/index.vue";
export default {
  name: "HelloWorld",
  components: {
    RenderTest,
    RenderComponent,
  },
  data() {
    return {
      msg: "vue render",
    };
  },
  methods: {
    // 测试 $nextTick() 和 $refs
    update() {
      let _this = this;
      this.msg = "updata vue render";
      console.log(_this.$refs.myMsg.value);
      this.$nextTick(() => {
        console.log("==.", _this.$refs.myMsg.value);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
