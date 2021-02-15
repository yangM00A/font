<template>
  <div class="navDiv">
    <div class="selected">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
    <ul>
      <li>消息1</li>
      <li>消息2</li>
      <li>消息3</li>
    </ul>
    <div class="title">
        <h1>h1---</h1>
        <h2>h2----</h2>
        <h3>h3-----</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$nav-color: #f90;
.navDiv {
  $width: 100px;
  $highlight-color: #f90;
  width: $width;
  color: $nav-color;
  .selected {
    border: 1px solid $highlight-color;
  }
    h2 {
      color: blue;
    }
  // .title{
  // }
}
</style>