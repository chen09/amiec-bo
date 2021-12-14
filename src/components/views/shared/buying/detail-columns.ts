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

export const detailColumnDefinitions: TableColumn[] = [
    {
        title: '行番号',
        align: 'center',
        fixed: 'left',
        width: 40,
        dataIndex: 'purchase_detail_no',
        slotsType: 'component',
        slots: {
            customRender: 'purchase_detail_no'
        },
        slotsFunc: (record) =>
            createVNode('a', {href: './detail/' + record.purchase_detail_no}, record.purchase_detail_no)
    },
    {
        title: 'メーカー',
        align: 'center',
        width: 40,
        dataIndex: 'maker_nm'
    },
    {
        title: '製品名',
        align: 'center',
        width: 40,
        dataIndex: 'product_nm'
    },
    {
        title: 'JANコード',
        align: 'center',
        width: 40,
        dataIndex: 'jan_cd',
        slotsType: 'component',
        slots: {
            customRender: 'jan_cd'
        },
        slotsFunc: (record) =>
            createVNode('a', {href: './goods/' + record.jan_cd}, record.jan_cd)
    },
    {
        title: 'シリアルNo.',
        align: 'center',
        width: 40,
        dataIndex: 'serial_no'
    },
    {
        title: 'お預り品返却ステータス',
        align: 'center',
        width: 40,
        dataIndex: 'return_status'
    },
    {
        title: 'キャンセル',
        align: 'center',
        width: 40,
        dataIndex: 'cancel_flg'
    },
    {
        title: '承認拒否',
        align: 'center',
        width: 40,
        dataIndex: 'disapproval_flg'
    },
    {
        title: '実査定コンディション',
        align: 'center',
        width: 40,
        dataIndex: 'customer_assess_condition_cd'
    },
    {
        title: '実査定金額',
        align: 'center',
        width: 40,
        dataIndex: 'assess_price'
    },
    {
        title: '当社購入品買取特典',
        align: 'center',
        width: 40,
        dataIndex: 'spn_markup'
    },
    {
        title: 'クーポン特典',
        align: 'center',
        width: 40,
        dataIndex: 'coupon_markup'
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
                func: ({record}, refreshTableData) => {
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
                func: ({record}, callback) => {
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
