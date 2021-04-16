import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  //   修改state中的属性值
  mutations,
  //   用户修改state中的值，并且传递给外界
  getters,
  //   主要是用来进行异步操作
  actions,
});

export default store;
