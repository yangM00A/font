<template>
  <div class="context">
    <TablePage :queryLable="queryLable" :queryBtn=queryBtn :tableColumn="tableColumn" :tableData="tableData" :operateBtn=operateBtn widthClass="fullwidth"></TablePage>
  </div>
</template>

<script>
import { getUserInfo, save, login } from "../http/helloworld/index";
import TablePage from "@/components/table-page";
export default {
  components: {
    TablePage,
  },
  data() {
    return {
      // 查询条件lable
      queryLable: [
        {
          labal: "告警等级",
          type: "select",
          name: "daveiceType",
          options: [
            {
              value: "选项1",
              label: "严重",
            },
            {
              value: "选项2",
              label: "告警",
            },
            {
              value: "选项3",
              label: "警告",
            },
            {
              value: "选项4",
              label: "提醒",
            },
            {
              value: "选项5",
              label: "普通",
            },
            {
              value: "选项6",
              label: "全部",
            },
          ],
        },
        {
          labal: "告警类型",
          name: "daveiceSmallType",
        },
      ],

      tableColumn: [
        {
          prop: "eventName",
          lable: "事件名称",
        },
        {
          prop: "deviceType",
          lable: "设备大类",
        },
        {
          prop: "deviceSmallType",
          lable: "设备小类",
        },
        {
          prop: "devcieName",
          lable: "告警等级",
        },
        {
          prop: "valueName",
          lable: "通知平台",
        },
        {
          prop: "weidu",
          lable: "通知类型",
        },
        {
          prop: "timer",
          lable: "通知模板",
        },
        {
          prop: "tiaojian",
          lable: "通知用户组",
        },
        {
          prop: "fazhi",
          lable: "启用时间段",
        },
        {
          prop: "unit",
          lable: "频率",
        },
      ],

      tableData: [
        {
          eventName: "乙二醇补水泵故障报警",
          deviceType: "蓄冷冷冻",
          deviceSmallType: "冷却水泵",
          devcieName: "告警",
          valueName: "APP",
          weidu: "短信",
          timer: "故障告警模版1",
          tiaojian: "用户组1  用户组2",
          fazhi: "9:00-18:00",
          unit: "60min",
        },
      ],
      queryBtn: ["query", "add"],
      // 表格数据操作按钮
      operateBtn: ["view", "edit", "disable"],
    };
  },

  mounted() {
    this.initData();
    // this.getUser();
    // this.saveUser();
    this.login()
  },
  methods: {
    initData() {
      let data = this.tableData[0];
      for (let index = 0; index < 100; index++) {
        this.tableData.push(data);
      }
    },

    getUser() {
      let params = { id: "Fred" };
      getUserInfo("/user/userInfo", params)
        .then((res) => {
          console.log("res=>", res);
        })
        .catch((err) => {
          console.log("res=>", err);
        });
    },

    saveUser() {
      let params = { address: "中国，广州，天河区" };
      save("/user/save", params)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    login() {
      login("/login", { address: "guangzhou", username: "张三", age: 18 })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // li点击事件
    clickLi(item) {
      this.isactive = item.index;
    },
  },
};
</script>

<style lang="scss" scoped>
.context {
  margin: 5px;
  box-sizing: border-box;
  display: flex;
}
</style>