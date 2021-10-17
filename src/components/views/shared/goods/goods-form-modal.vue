<template>
  <a-modal
    v-model:visible="visible"
    width="100%"
    :title="Number.isInteger(fields.id) ? '商品編集' : '商品新規'"
    :confirm-loading="confirmLoading"
    :afterClose="remove"
    @ok="handleOk"
  >
    <GoodsForm :model="modelRef" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" />

    <!--    <a-form ref="formRef" :model="modelRef" :label-col="labelCol" :wrapper-col="wrapperCol">-->
    <!--      <div>-->
    <!--        <a-row :gutter="[16, 0]">-->
    <!--          <a-col :span="12">-->
    <!--            <a-form-item label="MAPコード" :rules="rules.url" name="map_code">-->
    <!--              <a-input v-model:value="modelRef.map_code" placeholder="MAPコードご入力ください" />-->
    <!--            </a-form-item>-->
    <!--          </a-col>-->
    <!--        </a-row>-->
    <!--      </div>-->
    <!--    </a-form>-->
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, ref } from 'vue'
import { Modal, Form, InputNumber, Input, Select, Radio, Row, Col, Upload } from 'ant-design-vue'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
// import { constantRouterComponents } from '@/router/modules'
// import { ModuleItem } from '@/api/system/access/AccessModel'
// import { postAdminAccess, getAdminAccessModule, patchAdminAccess } from '@/api/system/access'
import GoodsForm from '@/components/views/shared/goods/goods-form.vue'

// const prefix = process.env.BASE_URL

interface IState {
  visible: boolean
  confirmLoading: boolean
  // moduleList: ModuleItem[]
}

export default defineComponent({
  name: 'GoodsFormModal',
  components: {
    GoodsForm,
    [Modal.name]: Modal,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [InputNumber.name]: InputNumber,
    [Input.name]: Input,
    [Select.name]: Select,
    [Row.name]: Row,
    [Col.name]: Col,
    [Radio.name]: Radio,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [Upload.name]: Upload,
    [PlusOutlined.name]: PlusOutlined,
    [LoadingOutlined.name]: LoadingOutlined,
    ASelectOption: Select.Option
  },
  props: {
    remove: {
      // 移除模态框
      type: Function
    },
    fields: {
      type: Object,
      default: () => ({})
    },
    callback: {
      type: Function
    }
  },
  setup(props) {
    const formRef = ref<any>(null)

    const state: IState = reactive({
      visible: true,
      confirmLoading: false,
      moduleList: []
    })
    const modelRef = reactive({
      map_code: props.fields.map_code,
      commodity: props.fields.commodity,
      moduleName: '',
      moduleId: undefined,
      actionName: '',
      viewPath: '',
      type: undefined as undefined | number,
      demo: undefined as undefined | number,
      url: '',
      icon: '',
      sort: 1,
      keepAlive: 1
    })

    // 如果有moduleId,则为编辑操作
    if (props.fields.moduleId) {
      Object.keys(modelRef).forEach((key) => (modelRef[key] = props.fields[key]))
      modelRef.type = props.fields.moduleId == -1 ? 1 : 2
    }

    const rules = {
      moduleName: [
        {
          required: true,
          message: '模块名称不能为空'
        }
      ],
      moduleId: [
        {
          required: true,
          message: '模块名称不能为空'
        }
      ],
      actionName: [
        {
          required: true,
          message: '请输入菜单名称'
        }
      ],
      type: [
        {
          required: true,
          message: '请选择类型'
        }
      ],
      url: [
        {
          required: true,
          message: '请输入url地址'
        }
      ],
      commodity: [
        {
          required: false
          // message: '请输入url地址'
        }
      ],
      map_code: [
        {
          required: true,
          message: 'MAPコードご入力ください'
        }
      ]
    }

    onMounted(async () => {
      // 获取模块列表
      // state.moduleList = await getAdminAccessModule()
    })

    const handleOk = async (e) => {
      e.preventDefault()
      state.confirmLoading = true
      try {
        await formRef.value.validate()
        const id = props.fields.id
        const params = { ...modelRef }
        params.viewPath ??= ''
        id && Reflect.deleteProperty(params, 'type')
        // await (id ? patchAdminAccess(id, params) : postAdminAccess(params)).finally(
        //   () => (state.confirmLoading = false)
        // )
        state.visible = false
        props?.callback?.()
      } catch (error) {
        console.log('error', error)
        state.confirmLoading = false
      }
    }

    return {
      ...toRefs(state),
      formRef,
      rules,
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      modelRef,
      // constantRouterComponents,
      handleOk
    }
  }
})
</script>

<style scoped></style>
