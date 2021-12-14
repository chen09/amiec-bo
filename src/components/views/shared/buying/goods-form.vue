<template>
  <a-form ref="formRef" :model="model" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-button type="primary">
      Primary
    </a-button>
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="1" header="基本情報">
      </a-collapse-panel>
    </a-collapse>
  </a-form>
    <a-form ref="formRef" :model="model" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div>
        <a-collapse v-model:activeKey="activeKey">
          <a-collapse-panel key="1" header="基本情報">
            <a-row :gutter="[16, 0]">
              <a-col :span="12">
                <a-form-item label="MAPコード" :rules="rules.url" name="map_code">
                  <a-input v-model:value="model.map_code" placeholder="MAPコードご入力ください" />
                </a-form-item>
                <a-form-item label="商材" :rules="rules.commodity" name="commodity">
                  <a-radio-group v-model:value="model.commodity" button-style="solid">
                    <a-radio-button value="1"> カメラ</a-radio-button>
                    <a-radio-button value="2"> 時計</a-radio-button>
                    <a-radio-button value="3"> 筆器具</a-radio-button>
                    <a-radio-button value="4"> 自転車</a-radio-button>
                  </a-radio-group>
                </a-form-item>
                <a-form-item label="商品区分" name="type">
                  <a-select v-model:value="model.type" placeholder="商品区分お選んでください">
                    <a-select-option :value="1"> 0: 新品</a-select-option>
                    <a-select-option :value="2"> 1: 中古</a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="デモ機" name="demo">
                  <a-checkbox v-model:checked="model.demo" />
                </a-form-item>
                <a-button type="primary" block>決定</a-button>
              </a-col>
              <a-col :span="12">
                <a-upload
                  v-model:file-list="fileList"
                  name="avatar"
                  list-type="picture-card"
                  class="avatar-uploader"
                  :show-upload-list="false"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  :before-upload="beforeUpload"
                  @change="handleChange"
                >
                  <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                  <div v-else>
                    <loading-outlined v-if="loading"></loading-outlined>
                    <plus-outlined v-else></plus-outlined>
                    <div class="ant-upload-text">Upload</div>
                  </div>
                </a-upload>
              </a-col>
            </a-row>
            <hr />
            <a-row :gutter="[16, 0]">
              <a-col :span="12">
                <a-col :span="6">
                  <a-form-item label="JANコード" :rules="rules.url" name="jan_code">
                    <a-input v-model:value="model.jan_code" placeholder="JANコードご入力ください" />
                  </a-form-item>
                </a-col>
                <a-col :span="3">
                  <a-button type="primary" block>反映</a-button>
                </a-col>
                <a-col :span="3">
                  <a-button type="primary" block>照会</a-button>
                </a-col>
              </a-col>

              <a-col :span="12">
                <a-form-item label="MAPコード" :rules="rules.url" name="map_code">
                  <a-input v-model:value="model.map_code" placeholder="MAPコードご入力ください" />
                </a-form-item>
                <a-form-item label="商材" :rules="rules.commodity" name="commodity">
                  <a-radio-group v-model:value="model.commodity" button-style="solid">
                    <a-radio-button value="1"> カメラ</a-radio-button>
                    <a-radio-button value="2"> 時計</a-radio-button>
                    <a-radio-button value="3"> 筆器具</a-radio-button>
                    <a-radio-button value="4"> 自転車</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="This is panel header 2">
            <p>{{ text }}</p>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="This is panel header 3">
            <p>{{ text }}</p>
          </a-collapse-panel>
        </a-collapse>
      </div>

      <!--    <div>-->
      <!--      <a-tabs type="card">-->
      <!--        <a-tab-pane key="1" tab="基本情報" force-render> </a-tab-pane>-->
      <!--        <a-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</a-tab-pane>-->
      <!--        <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>-->
      <!--      </a-tabs>-->
      <!--    </div>-->
    </a-form>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue'
import {PlusOutlined, LoadingOutlined} from '@ant-design/icons-vue'
import {Tabs, TabPane, Card, Collapse, CollapsePanel} from 'ant-design-vue'
import {Form} from 'ant-design-vue'
import {Button} from 'ant-design-vue'

export default defineComponent({
  name: 'GoodsForm',
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Collapse.name]: Collapse,
    [CollapsePanel.name]: CollapsePanel,

  }
})
</script>

<script setup lang="ts">
import {ref} from 'vue'

import {ValidationRule} from 'ant-design-vue/lib/form/Form'

const activeKey = ref('1')
const formRef = ref<any>(null)

const props = defineProps<{
  model: {
    [key: string]: any
  }
  labelCol?: unknown
  wrapperCol?: unknown
  rules?: {
    [k: string]: ValidationRule | ValidationRule[]
  }
}>()
// const { foo } = toRefs(props)
</script>

<style scoped></style>
