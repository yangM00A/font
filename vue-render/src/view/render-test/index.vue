
<script>
// 普通的render
/**
 * 三个参数 
 * 第一个：节点元素（也可以是组件，另外一个示例演示）
 * 第二个：元素的属性，具体参照官方文档
 * 第三个：是节点中的填充，比如：<h1>hello world</h1>，也可以是另外一个createElement
 */
export default {
  props: {
    tag: String,
  },

  data(){
      return{
          names:['小航','小节','小郑']
      }
  },

  render(createElement) {
    return createElement(this.tag, { class: "divClass",attrs:{name:'ulName',id:'ulId'} }, this.names.map(name=>{return createElement('li',{},name)}));
  },
};
</script>

<style>
</style>