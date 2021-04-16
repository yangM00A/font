export default {
  // 修改
  edit(state, obj) {
    console.log(state, obj);
    state.userInfo.name = obj.name
  },
  // 添加
  add(state, obj) {
    state.userInfo.age = obj.age
  },
  // 删除
  delete(state) {
    state.userInfo.age = 200
  },
}
