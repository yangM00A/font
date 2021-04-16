import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Getters from '@/components/Getters'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/test',
    name: 'Test',
    component: Test
  }, {
    path: '/getters',
    name: 'Getters',
    component: Getters
  }],
  mode: 'history'
})
