import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: "Tom",
  },
//   修改state中的属性值
  mutations: {
    // 修改
    edit(state, obj) {
      console.log(state, obj);
      state.name = obj.name
    },
    // 添加
    add(state,obj) {
        Vue.set(state,'age',obj.age)
        console.log(state);
    },
    // 删除
    delete(state) {
        Vue.delete(state,'age')
    },
  },
//   用户修改state中的值，并且传递给外界
  getters: {
      getUserName(state){
        console.log(state);
        return state.name+' '+'London'
      },
      getUserAge(state,getters){
          return getters.getUserName+' 年龄 '+state.age
      }
  },
//   主要是用来进行异步操作
  actions: {
      httpResp(context,obj){
        setTimeout(()=>{
          context.commit('edit',obj)
        },2000)
      }
  },
});

export default store;
