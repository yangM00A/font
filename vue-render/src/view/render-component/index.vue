<script>
import Test from "../../components/test";
export default {
  components: {
    Test,
  },
  data() {
    return { id: "userId", userName: "张三" };
  },

  render(createElement) {
    return createElement(Test, {props: { id: this.id, userName: this.userName}});
  },
};
</script>

<style>
</style>