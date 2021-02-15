<template>
  <div class="hello">
     你好，我是Home
     <router-link to="/Home/Message">message</router-link>
     <router-link to="/Home/New">new</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
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
