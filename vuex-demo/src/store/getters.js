export default {
  getUserName(state) {
    console.log(state);
    return state.name + ' ' + 'London'
  },
  getUserAge(state, getters) {
    return getters.getUserName + ' 年龄 ' + state.age
  }
}
