<template>
  <div class="tableDiv">
    <div class="tableClass" :class="widthClass">
      <el-table height="74vh" :data="tableData" :border="true" size="mini" :header-cell-style="{background:'rgb(230, 230, 230)'}" :row-class-name="tableRowClassName">
        <el-table-column prop="id" label="选择" width="50" align="center" type="selection">
        </el-table-column>
        <el-table-column :prop="item.prop" :label="item.lable" :width="item.width==undefined?'180':item.width" align="center" v-for="(item ,index) in tableColumn" :key="index">
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="170" align="center" v-if="operateBtn.length>0">
          <template slot-scope="scope">
            <div class="btn" v-for="(opera ,index) in operateBtn" :key="index">
              <span @click="handleClick(scope.row)" v-if="opera==='view'">详情</span>
              <span v-if="opera==='edit'">编辑</span>
              <span v-if="opera==='user'">启用</span>
              <span v-if="opera==='disable'">禁用</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pageClass">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[20, 30, 40,50]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //   表列
    tableColumn: {
      type: Array,
      default: () => [],
    },
    // 表数据
    tableData: {
      type: Array,
      default: () => [],
    },
    operateBtn: {
      type: Array,
      default: () => [],
    },
    widthClass: {
      type: String,
      default: () => "notfullwidth",
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },

  methods: {
    handleClick(item) {
      console.log(item);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 != 0) {
        return "table-row";
      }
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.tableDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .fullwidth {
    width: calc(100vw - 30px);
  }
  .notfullwidth {
    width: calc(100vw - 200px);
  }

  .btn {
    display: inline-block;
    width: 25%;
    :hover {
      cursor: pointer;
    }
  }

  .pageClass {
    margin-top: 10px;
    text-align: center;
    height: 50px;
  }
}
</style>