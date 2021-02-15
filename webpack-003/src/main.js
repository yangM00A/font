// let {sum , getTime}  = require("./mathUtils.js")

let { sum, getTime } = require('./mathUtils.js')

require('./css/index.css')

require('./less/index.less')
import { name, getName } from './info'

// 使用Vue

import Vue from 'vue'
// import app from './vue/app'
import app from './vue/app.vue'

// 当template 和 el 同时存在是，template中的内容会替换掉el中的标签
let vue = new Vue({
    el: '#app',
    template:'<app/>',
    components:{
        app
    }
})

console.log(vue, '====>');

console.log(sum(100, 100));
console.log(getTime());

console.log(name);
console.log(getName());