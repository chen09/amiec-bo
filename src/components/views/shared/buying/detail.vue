<template>
  <div>
      <a-tabs type="card" v-model:activeKey="activeKey" :style="{ height: '250px' }">
        <a-tab-pane key="1" tab="おまとめ設定">
          <a-form-item label="おまとめ対象フラグ">
            <a-switch v-model:checked="formState.combined_flg"/>
          </a-form-item>
          <a-form-item label="おまとめ先買取伝票番号">
            <a-input v-model:value="formState.combined_purchase_no"/>
          </a-form-item>
          <a-button type="primary" @click="doCombine">おまとめ</a-button>
        </a-tab-pane>
        <a-tab-pane key="2" tab="買取情報">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="買取伝票番号">
                <a-input v-model:value="formState.purchase_no"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="買取ステータス">
                <a-select v-model:value="formState.purchase_status" placeholder="">
                  <a-select-option value="01">買取受付</a-select-option>
                  <a-select-option value="02">査定済</a-select-option>
                  <a-select-option value="03">返答待ち</a-select-option>
                  <a-select-option value="04">査定額承認済</a-select-option>
                  <a-select-option value="05">査定額一部承認</a-select-option>
                  <a-select-option value="06">査定額承認拒否</a-select-option>
                  <a-select-option value="07">再査定中</a-select-option>
                  <a-select-option value="08">買取確定</a-select-option>
                  <a-select-option value="09">買取キャンセル</a-select-option>
                  <a-select-option value="10">確定後キャンセル</a-select-option>
                  <a-select-option value="11">買取金支払済</a-select-option>
                  <a-select-option value="12">下取仮確定</a-select-option>
                  <a-select-option value="13">下取り確定待ち</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="EC買取ID">
                <a-input v-model:value="formState.ec_purchase_id"/>
              </a-form-item>
            </a-col>
          </a-row>

          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="受付日">
                <a-input v-model:value="formState.date"/>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="商材">
                <a-radio-group v-model:value="formState.merchandise_cd">
                  <a-radio value="1">時計</a-radio>
                  <a-radio value="2">カメラ</a-radio>
                  <a-radio value="3">筆記用具</a-radio>
                  <a-radio value="4">自転車</a-radio>
                </a-radio-group>

              </a-form-item>

            </a-col>
            <a-col :span="8">
              <a-form-item label="受付フロア">
                <a-select v-model:value="formState.floor_cd" placeholder="">
                  <a-select-option value="01">01</a-select-option>
                  <a-select-option value="02">02</a-select-option>
                  <a-select-option value="03">03</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>


        </a-tab-pane>
        <a-tab-pane key="3" tab="顧客情報">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="3" tab="振込情報">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="4" tab="買取伝票明細一覧">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="5" tab="注文情報">Content of Tab Pane 3</a-tab-pane>
        <a-tab-pane key="5" tab="お受取内容">Content of Tab Pane 3</a-tab-pane>

      </a-tabs>

    <hr/>

    <dynamic-table
        ref="tableRef"
        :show-summary="false"
        size="small"
        :scroll="{ x: 1500, y: 450 }"
        :data-source="dataSource"
        :columns="columns"
        rowKey="purchase_no"
    />
  </div>


</template>

<script lang="ts">
import {defineComponent} from 'vue'

import {DynamicTable, TableQueryHeader} from '@/components/dynamic-table'
import {Checkbox, Row, Col} from 'ant-design-vue'


export default defineComponent({
  name: 'PurchaseDetail',
  component: {
    DynamicTable,
    TableQueryHeader
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.purchase_no = this.$route.params.purchase_no
          this.formState.purchase_no = this.$route.params.purchase_no
          console.log(this.$route.params.purchase_no)
        },
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        {immediate: true}
    )
  },
})
</script>

<script setup lang="ts">
import mockData from './mockData.json'
import {detailColumnDefinitions} from './detail-columns'
import {reactive, ref, UnwrapRef} from 'vue'
import {Moment} from 'moment';

// import GoodsItem from '@/views/shared/demos/goods/goods-item.vue'
const tableRef = ref<InstanceType<typeof DynamicTable>>()
const purchase_no = ref()

const dataSource = reactive(mockData)
const columns = detailColumnDefinitions.map((n) => ({width: 120, ...n}))
// const columns = columnDefinitions.map((n) => ({ width: 120, ...n }))

// const count = reactive<number>(mockData)

const queryParam = reactive({
  // 表格查询参数
  name: '',
  status: '',
  startDate: '',
  endDate: ''
})
const activeKey = ref('1')

interface FormState {
  combined_purchase_no: string;
  purchase_no: string;
  ec_purchase_id: string;
  reception_date: string;
  merchandise_cd: string;
  purchase_status: string | undefined;
  floor_cd: string | undefined;
  date1: Moment | undefined;
  combined_flg: boolean;
  type: string[];
  resource: string;
  desc: string;
}

const formState: UnwrapRef<FormState> = reactive({
  combined_purchase_no: '',
  purchase_no: '',
  ec_purchase_id: '',
  reception_date: '',
  merchandise_cd: '',
  purchase_status: undefined,
  floor_cd: undefined,
  date1: undefined,
  combined_flg: false,
  type: [],
  resource: '',
  desc: '',
});

</script>

<style scoped></style>
