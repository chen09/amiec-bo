<template>
  <div>
    <dynamic-table
        :show-summary="false"
        size="small"
        :scroll="{ x: 1500, y: 300 }"
        :data-source="dataSource"
        :columns="columns"
        rowKey="map_code"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { DynamicTable } from '@/components/dynamic-table'
import { Checkbox, Row, Col } from 'ant-design-vue'

export default defineComponent({
  name: 'Goods'
})
</script>

<script setup lang="ts">
import mockData from './mockData.json'
import { columnDefinitions } from './columns'
import { reactive } from 'vue'
// import GoodsItem from '@/views/shared/demos/goods/goods-item.vue'

const dataSource = reactive(mockData)
const columns = columnDefinitions.map((n) => ({ width: 120, ...n }))
// const columns = columnDefinitions.map((n) => ({ width: 120, ...n }))

// const count = reactive<number>(mockData)
</script>

<style scoped></style>
