<template>
  <!-- 给render测试使用的组件 -->
  <div :id=id>
    用户名是{{userName}}
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style>
</style>