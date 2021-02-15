<template>
  <div id="app">
    <router-link to='/Home'>Home</router-link>
    <router-link to='/About'>About</router-link>
    <router-link :to="'/User/'+username">User</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      username:'zhangsan'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
