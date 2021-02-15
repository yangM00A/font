require('./css/index.css')
require('./less/index.less')

// 使用Vue
import Vue from 'vue'
// 组件使用
import app from './vue/app.vue'

// 当template 和 el 同时存在是，template中的内容会替换掉el中的标签
new Vue({
    el: '#app',
    template: '<app/>',
    components: {
        app
    }
})
