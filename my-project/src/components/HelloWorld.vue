<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: " to Your Vue.js App",
      title: "",
      arr: [10, 20, 30, 100, 50],
    };
  },

  created() {
    console.log(...this.arr);

    // let arr2=[]
    // this.arr.forEach((value,index)=>{
    //   value++
    //   arr2.push(value)
    // })
    // console.log(...arr2);

    let arr3 = this.arr.filter((value, index) => {
      return value >= 30;
    });
    console.log(...arr3);

    let arr4 = this.arr.map((value, index) => {
      return value - 1;
    });
    console.log(...arr4);

    let count = this.arr.reduce((previousValue, currentValue, currentIndex) => {
      console.log("previousValue", previousValue);
      console.log("currentValue", currentValue);
      currentValue += previousValue;
      return currentValue;
    }, 0);

    console.log(count);

    // console.time("start")
    // let title = '你好'
    // let conten = `${title}`
    // this.title = conten
    // this.add();
    // console.timeEnd("start")
  },

  methods: {
    add() {
      // console.log(this.$store.commit(increment));
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
</style>
