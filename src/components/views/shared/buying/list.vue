<template>
  <div>

    <!--    <a-button type="primary" @click="tableRef?.refreshTableData({}, true)">検索</a-button>-->
    <!--    <a-button type="primary"> test</a-button>-->

<!--    <a-button type="primary"> new a buying</a-button>-->
<!--    <hr/>-->

    <table-query-header>


      <template #item1="{ setLabel }">
        <div :label="setLabel('商材')">
          <a-radio-group v-model:value="queryParam.status" placeholder="商材" default-value="1">
            <a-radio-button value="1">カメラ</a-radio-button>
            <a-radio-button value="2">時計</a-radio-button>
            <a-radio-button value="3">筆記具</a-radio-button>
            <a-radio-button value="4">自転車</a-radio-button>
          </a-radio-group>
        </div>
      </template>

      <template #item2="{ setLabel }">
        <div :label="setLabel('買取伝票番号')">
          <a-input v-model:value="queryParam.name" placeholder=""/>
        </div>
      </template>

      <template #item3="{ setLabel }">
        <div :label="setLabel('EC買取ID')">
          <a-input v-model:value="queryParam.name" placeholder=""/>
        </div>
      </template>

      <template #item4="{ setLabel }">
        <div :label="setLabel('日付')">
          <a-date-picker
              v-model:value="queryParam.endDate"
              style="width: 100%"
              placeholder="日付"
          />
        </div>
      </template>
      <template #buttons>
        <a-button type="primary" @click="tableRef?.refreshTableData({}, true)">検索</a-button>
        <a-button style="margin-left: 8px" @click="() => (queryParam = {})">リセット</a-button>
      </template>
    </table-query-header>
    <dynamic-table
        ref="tableRef"
        :show-summary="false"
        size="small"
        :scroll="{ x: 1500, y: 450 }"
        :get-list-func="loadData"
        :columns="columns"
        rowKey="purchase_no"
    >

      <template #title>
        <a-button
            type="primary"
            @click="addItem"
        >
          Add
        </a-button>
        <a-button
            type="primary"
            @click="deleteItems"
        >
          Delete
        </a-button>
      </template>
      <template #moduleName="{ record }">
      <span :ref="(el) => el && (itemRefs[record.id] = el)">
        {{ record.moduleName || record.actionName }}
      </span>
      </template>
    </dynamic-table>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {DynamicTable, TableQueryHeader} from '@/components/dynamic-table'

export default defineComponent({
  name: 'PurchaseList',
  component: {
    DynamicTable,
    TableQueryHeader
  }
})
</script>

<script setup lang="ts">
import mockData from './mockData.json'
import {listColumnDefinitions} from './list-columns'
import {reactive, ref} from 'vue'
import {getBuyingList} from '@/utils/api/buying'
// import GoodsItem from '@/views/shared/demos/goods/goods-item.vue'

const tableRef = ref<InstanceType<typeof DynamicTable>>()
const itemRefs = ref({})

const dataSource = reactive(mockData)
const columns = listColumnDefinitions.map((n) => ({width: 120, ...n}))

// const queryParam = reactive(
//     {
//       // 表格查询参数
//       name: '',
//       status: '',
//       startDate: '',
//       endDate: ''
//     }
// )

const state = reactive({
  queryParam: {
    // 表格查询参数
    name: '',
    status: '',
    startDate: '',
    endDate: ''
  } as any,
  tableLoading: false,
  rowSelection: {
    onChange: (selectedRowKeys, selectedRows) => {
      state.rowSelection.selectedRowKeys = selectedRowKeys
    },
    selectedRowKeys: []
  }
})

const loadData = (params) => {
  const myParams = {...params, ...queryParam}
  console.log(myParams, '查询参数')
  return getBuyingList(myParams)
}

// const columns = columnDefinitions.map((n) => ({ width: 120, ...n }))

// const count = reactive<number>(mockData)

let queryParam = reactive({
  // 表格查询参数
  name: '',
  status: '',
  startDate: '',
  endDate: ''
})

import {useCreateModal} from '@/hooks'
import BuyingDetail from './detail.vue'
const addItem = () => {
  // useCreateModal(BuyingDetail, {
  //   callback: () => {
  //     tableRef.value?.refreshTableData()
  //   }
  // })
}
</script>

<style scoped></style>
