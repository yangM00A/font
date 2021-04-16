<template>
  <div>
    <h3>getter和 mapGetters</h3>
    <ol>
      <li v-for="(person,index) in getTestPersonList" :key="index">{{person.name}}</li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // 和mapStates 方法类似
    ...mapGetters(["getTestPersonList"]),
  },
};
</script>

<style>
</style>