// @ts-ignore
import {message} from 'ant-design-vue'
// import { delAdminAccess } from '@/api/system/access'
import {useCreateModal} from '@/hooks'
import OperateModal from '@/components/views/shared/goods/operate-modal.vue'
import GoodsItem from '@/components/views/shared/goods/goods-item.vue'
import GoodsFormModal from '@/components/views/shared/goods/goods-form-modal.vue'

import {formatDate} from '@/utils/common'
import {createVNode} from 'vue'
import {Tag} from 'ant-design-vue'
import mockTags from './mockTags.json'
import {convertTags, formatCurrency} from '@/components/views/shared/goods'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons-vue'

export const columnDefinitions: TableColumn[] = [
    {
        title: 'MAPコード',
        align: 'center',
        fixed: 'left',
        width: 80,
        dataIndex: 'map_code'
    },
    {
        title: 'JANコード',
        align: 'center',
        width: 80,
        dataIndex: 'jan_code'
    },
    {
        title: '商品名',
        align: 'center',
        dataIndex: 'goods_name'
    },
    {
        title: '販売価格',
        align: 'center',
        width: 60,
        dataIndex: 'selling_price',
        slots: {
            customRender: 'selling_price'
        },
        slotsType: 'format',
        slotsFunc: (val) => formatCurrency(val)
    },
    {
        title: '特価',
        align: 'center',
        width: 60,
        dataIndex: 'special_price',
        slots: {
            customRender: 'special_price'
        },
        slotsType: 'format',
        slotsFunc: (val) => formatCurrency(val)
    },
    {
        title: 'メーカー',
        align: 'center',
        dataIndex: 'maker_name'
    },
    {
        title: '画像',
        align: 'center',
        width: 120,
        dataIndex: 'image_thumbnail',
        slots: {
            customRender: 'image_thumbnail'
        },
        slotsType: 'component',
        slotsFunc: (record) =>
            createVNode('img', {src: record.image_thumbnail, width: '120', height: '120'})
    },
    {


        title: 'タグ',
        align: 'center',
        dataIndex: 'publish_status',
        slots: {
            customRender: 'publish_status'
        },
        slotsType: 'component',
        slotsFunc: (record) => {
            return createVNode('div', {}, convertTags(record.tags))
        }
    },
    {
        title: '登録日時',
        align: 'center',
        width: 60,
        dataIndex: 'createdAt',
        slots: {
            customRender: 'createdAt'
        },
        slotsType: 'format',
        slotsFunc: (val) => formatDate(val) // 格式化时间
    },
    {
        title: '更新日時',
        width: 60,
        align: 'center',
        dataIndex: 'updatedAt',
        slots: {
            customRender: 'updatedAt'
        },
        slotsType: 'format',
        slotsFunc: (val) => formatDate(val) // 格式化时间
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 20,
        fixed: 'right',
        slots: {
            customRender: 'action'
        },
        actions: [
            {
                type: 'popconfirm', // 控制类型，默认为a,可选： select | button | text
                text: '',
                // permission: {
                //   // 权限
                //   action: 'delete', // 删除权限
                //   effect: 'disabled' // 没有权限时禁用按钮，不传effect则不显示按钮
                // },
                props: {
                    type: 'danger', // 按钮类型
                    icon: createVNode(DeleteOutlined, {})
                },
                func: ({ record }, refreshTableData) => {
                    // 点击删除的回调
                    // if (record.id < 6) {
                    //   return message.warn('系统预置菜单，不能删除！')
                    // }
                    // return delAdminAccess(record.id).then(() => refreshTableData())
                }
            },
            {
                type: 'button', // 控制类型，默认为a,可选： select | button | text
                text: '',
                // permission: {
                //   // 权限
                //   action: 'update',
                //   effect: 'disabled'
                // },
                props: {
                    type: 'default', // 按钮类型
                    icon: createVNode(EditOutlined, {}),
                    style: 'background: #faad14;border-color: #faad14;',
                },
                class: 'ant-btn-warning',
                func: ({ record }, callback) => {
                    // console.log(record)
                    useCreateModal(GoodsFormModal, {
                        // useCreateModal(GoodsItem, {
                        // 点击删除的回调
                        fields: record,
                        callback
                    })
                }
            }
        ]


    }

]
