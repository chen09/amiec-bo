<template>
  <div v-if="loading" class="loading">Loading...</div>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="post" class="content">
    <a-form ref="formRef" :model="model" :label-col="labelCol" :wrapper-col="wrapperCol">
      <div>
        <a-collapse v-model:activeKey="activeKey">
          <a-collapse-panel key="1" header="基本情報">
            <a-row :gutter="[16, 0]">
              <a-col :span="24">
                <a-form-item label="MAPコード" name="map_code">
                  <a-input placeholder="MAPコードご入力ください" v-model:value="post.map_code"/>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item label="商材" name="commodity">
                  <a-radio-group button-style="solid" v-model:value="post.commodity">
                    <a-radio-button value="1"> カメラ</a-radio-button>
                    <a-radio-button value="2"> 時計</a-radio-button>
                    <a-radio-button value="3"> 筆器具</a-radio-button>
                    <a-radio-button value="4"> 自転車</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>

              <a-col :span="24">
                <a-form-item label="商品区分" name="type">
                  <a-select v-model:value="post.type" placeholder="商品区分お選んでください">
                    <a-select-option :value="1"> 0: 新品</a-select-option>
                    <a-select-option :value="2"> 1: 中古</a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item label="デモ機" name="demo">
                  <a-checkbox/>
                </a-form-item>
                <a-form-item label="画像" name="image">
                  <a-upload
                      v-model:file-list="fileList"
                      name="avatar"
                      list-type="picture-card"
                      class="avatar-uploader"
                      :show-upload-list="false"
                      :action="post.image"
                      :before-upload="beforeUpload"
                      @change="handleChange"
                  >
                    <img v-if="post.image" :src="post.image" alt="avatar"/>
                    <div v-else>
                      <loading-outlined v-if="loading"></loading-outlined>
                      <plus-outlined v-else></plus-outlined>
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                </a-form-item>
              </a-col>

            </a-row>
            <hr/>
            <a-button type="primary" block>決定</a-button>
            <hr/>
            <a-row :gutter="[16, 0]">
              <a-col :span="24">
                <a-form-item label="JANコード" name="jan_code">
                  <a-input placeholder="JANコードご入力ください" v-model:value="post.jan_code"/>
                </a-form-item>
                <a-form-item label="自社JAN採番" name="selfCheck">
                  <a-checkbox/>
                </a-form-item>
                <a-form-item label="商品名" name="name">
                  <a-input placeholder="JANコードご入力ください" v-model:value="post.name"/>
                </a-form-item>
              </a-col>
            </a-row>

            <!--            <a-row :gutter="[16, 0]">-->
            <!--              <a-col :span="12">-->
            <!--                <a-col :span="6">-->
            <!--                  <a-form-item label="JANコード"  name="jan_code">-->
            <!--                    <a-input v-model:value="model.jan_code" placeholder="JANコードご入力ください" />-->
            <!--                  </a-form-item>-->
            <!--                </a-col>-->
            <!--                <a-col :span="3">-->
            <!--                  <a-button type="primary" block>反映</a-button>-->
            <!--                </a-col>-->
            <!--                <a-col :span="3">-->
            <!--                  <a-button type="primary" block>照会</a-button>-->
            <!--                </a-col>-->
            <!--              </a-col>-->

            <!--              <a-col :span="12">-->
            <!--                <a-form-item label="MAPコード"  name="map_code">-->
            <!--                  <a-input v-model:value="model.map_code" placeholder="MAPコードご入力ください" />-->
            <!--                </a-form-item>-->
            <!--                <a-form-item label="商材" name="commodity">-->
            <!--                  <a-radio-group v-model:value="model.commodity" button-style="solid">-->
            <!--                    <a-radio-button value="1"> カメラ</a-radio-button>-->
            <!--                    <a-radio-button value="2"> 時計</a-radio-button>-->
            <!--                    <a-radio-button value="3"> 筆器具</a-radio-button>-->
            <!--                    <a-radio-button value="4"> 自転車</a-radio-button>-->
            <!--                  </a-radio-group>-->
            <!--                </a-form-item>-->
            <!--              </a-col>-->
            <!--            </a-row>-->
          </a-collapse-panel >

          <a-collapse-panel v-if="post.commodity == '1'" key="2" header="カメラ属性">
            <p> カメラ </p>
          </a-collapse-panel>
          <a-collapse-panel v-if="post.commodity == '3'" key="3" header="筆記具属性">
            <p> 筆記具 </p>
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
  </div>

</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue'
import {PlusOutlined, LoadingOutlined} from '@ant-design/icons-vue'
import {Tabs, TabPane, Card, Collapse, CollapsePanel} from 'ant-design-vue'
import {Form} from 'ant-design-vue'
import {Button} from 'ant-design-vue'
import mockData from './mockData.json'
import _ from 'lodash'

export default defineComponent({
  name: 'SnForm',
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Collapse.name]: Collapse,
    [CollapsePanel.name]: CollapsePanel,
  },
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    this.$watch(
        () => this.$route.params,
        () => {
          this.fetchData(this.$route.params.id)
        },
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        {immediate: true}
    )
  },
  methods: {
    fetchData(id) {
      this.error = this.post = null
      this.loading = true
      console.log("@@@@",id)

      // axios

      const data =_.get(mockData,id)
      this.loading = false
      if (data){
        this.post = data
      }else{
        this.error = 'no data: ' + id
      }
      console.log("@@@@",data)
    }
  }

})
</script>

<script setup lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {watch, computed} from 'vue';
import {ValidationRule} from 'ant-design-vue/lib/form/Form'
import {useRoute} from "vue-router";
// import mockData from './mockData.json'

const activeKey = ref('1')
const formRef = ref<any>(null)
const labelCol = {span: 3};
const wrapperCol = { span: 20 }
const route = useRoute()

// const dataSource = reactive(mockData)


// // console.log(route)
// watch(
//     () => route.params,
//     async newParams => {
//       console.log("@@@");
//     }
// )

const props = defineProps<{
  model: {
    [key: string]: any
  }
  // labelCol?: unknown
  // wrapperCol?: unknown
  rules?: {
    [k: string]: ValidationRule | ValidationRule[]
  }
}>()
// const { foo } = toRefs(props)
</script>

<style scoped></style>
