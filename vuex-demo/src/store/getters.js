export default {
  getUserName(state) {
    return state.name + ' ' + 'London'
  },
  getUserAge(state, getters) {
    return getters.getUserName + ' 年龄 ' + state.age
  },

  getTestPersonList(state) {
    return state.testObj.personList
  }

}
