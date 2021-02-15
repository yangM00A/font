// let {sum , getTime}  = require("./mathUtils.js")

let { sum, getTime } = require('./mathUtils.js')

require('./css/index.css')

require('./less/index.less')
import {name,getName} from './info'


console.log(sum(100,100));
console.log(getTime());

console.log(name);
console.log(getName());