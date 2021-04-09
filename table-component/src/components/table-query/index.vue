<template>
  <div class="tableQuery">
    <div class="queryList">
      <div v-for=" (itemObj,index) in queryLable" :key="index" class="lableDiv">
        <div v-if="itemObj.type=='select'" class="lableClass">
          <span>{{itemObj.labal}}</span>
          <el-select v-model="itemObj.value" placeholder="请选择" size="mini" style="width:60%">
            <el-option v-for="(item,index) in itemObj.options" :key="index" :label="item.label" :value="item.value" align="center">
            </el-option>
          </el-select>
        </div>
        <div v-if="itemObj.type=='daterange'" class="dateClass">
          <span>{{itemObj.labal}}</span>
          <el-date-picker v-model="itemObj.value" size="mini" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:70%">
          </el-date-picker>
        </div>
        <div v-if="itemObj.type==undefined||itemObj.type==='input'" class="lableInputClass">
          <span>{{itemObj.labal}}</span>
          <el-input v-model="itemObj.value" style="width:60%" size="mini"></el-input>
        </div>
      </div>
    </div>
    <div class="operateBtn">
      <span v-for="(item,index) in queryBtn" :key="index">
        <el-button v-show="item=='query'" type="primary" size="mini" icon="el-icon-search" @click="query()">查询</el-button>
        <el-button v-show="item=='add'" type="primary" size="mini" icon="el-icon-plus" @click="add()">新增</el-button>
        <el-button v-show="item=='delete'" type="danger" size="mini" icon="el-icon-delete">删除</el-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    queryLable: {
      type: Array,
      default: () => [],
    },
    queryBtn: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      dataList: {},
    };
  },

  methods: {
    query() {
      console.log("data", this.queryLable);
      this.queryLable.forEach((element) => {
        this.dataList[element.name] = element.value;
      });
      console.log("输入结果==>", this.dataList);
    },
  },
};
</script>

<style lang="scss" scoped>
.tableQuery {
  box-sizing: border-box;
  margin: 10px 20px 10px 0px;
  .queryList {
    display: flex;
    flex-wrap: wrap;

    .lableDiv {
      margin: 4px 0px;

      .lableClass {
        width: 200px;
        display: inline-block;
      }
      .lableInputClass {
        width: 220px;
      }
      .dateClass {
        width: 360px;
      }
    }
  }

  .operateBtn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>