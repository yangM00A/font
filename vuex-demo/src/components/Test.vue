<template>
  <div>
    <h3>mapState的使用</h3>
    <ol>
      <li v-for="(person, index) in personList" :key="index">{{person.name}}</li>
    </ol>

    <span>{{username}}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },

  // 第一种用法
  // computed: mapState({
  //   personList: function (state) {
  //     return state.testObj.personList;
  //   },
  //   hello: (state) => state.testObj.personList,
  // }),

  // 第二种用法
  //   computed: mapState(["username"]),

  //   第三种

  computed: {
    count() {
      return 100 + 1;
    },

    // ...mapState(["username"]),

    //
    ...mapState({
      personList: (states) => states.testObj.personList,
      username: "username",
    }),
  },

  created() {
    console.log(mapState(["username"]));
  },
};
</script>

<style>
</style>