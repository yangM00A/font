<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ this.$store.state.name }}</h1>
    <h1>{{ this.$store.state.age }}</h1>
    <span>{{username}}</span>
    <button @click='deleteParam'>删除</button>
    <button @click="getUserName">获取用户信息</button>
    <button @click="httpClick">模拟请求</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data(){
    return {
      username:null,
    }
  },
  created(){
    this.$store.commit('edit',{name:'Jack'})
    this.$store.commit('add',{age:15})
  },
  methods:{
    deleteParam(){
      console.log('删除');
      this.$store.commit('delete')
    },
    getUserName(){
      this.username = this.$store.getters.getUserName
    },
    httpClick(){
      this.$store.dispatch('httpResp',{name:'yangmeng'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
