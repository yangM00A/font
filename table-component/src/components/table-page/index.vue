<template>
  <div class="comp_context">
    <TableQuery :queryLable=queryLable :queryBtn=queryBtn></TableQuery>
    <TableList :tableColumn=tableColumn :tableData=tableData :operateBtn=operateBtn :widthClass="widthClass"></TableList>
  </div>
</template>

<script>
import TableQuery from "@/components/table-query";
import TableList from "@/components/table-list";
export default {
  components: {
    TableQuery,
    TableList,
  },
  props: {
    queryLable: {
      type: Array,
      default: () => [],
    },
    tableColumn: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    queryBtn: {
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
};
</script>

<style lang="scss" scoped>
.comp_context {
  box-sizing: border-box;
  padding-left: 10px;
}
</style>