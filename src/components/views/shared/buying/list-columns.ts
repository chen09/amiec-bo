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

export const listColumnDefinitions: TableColumn[] = [
    {
        title: '買取伝票番号',
        align: 'center',
        fixed: 'left',
        width: 40,
        dataIndex: 'purchase_no',
        slotsType: 'component',
        slots: {
            customRender: 'purchase_no'
        },
        slotsFunc: (record) =>
            createVNode('a', {href: './detail/' + record.purchase_no}, record.purchase_no)
    },
    {
        title: 'EC買取ID',
        align: 'center',
        width: 40,
        dataIndex: 'ec_purchase_id'
    },
    {
        title: 'ご注文ID',
        align: 'center',
        width: 40,
        dataIndex: 'order_id'
    },
    {
        title: '顧客コード',
        align: 'center',
        width: 40,
        dataIndex: 'customer_cd'
    },
    {
        title: '顧客名',
        align: 'center',
        width: 40,
        dataIndex: 'customer_nm'
    },
    {
        title: '顧客名（カナ）',
        align: 'center',
        width: 40,
        dataIndex: 'customer_nm_kana'
    },
    {
        title: '受付日',
        align: 'center',
        width: 40,
        dataIndex: 'reception_date'
    },
    {
        title: '買取確定日',
        align: 'center',
        width: 40,
        dataIndex: 'fixed_date'
    },
    {
        title: '買取ステータス',
        align: 'center',
        width: 40,
        dataIndex: 'purchase_status'
    },
    {
        title: 'お預り品返却ステータス',
        align: 'center',
        width: 40,
        dataIndex: 'return_status'
    },
    {
        title: '合計金額',
        align: 'center',
        width: 40,
        dataIndex: 'total_price'
    },
    {
        title: '未成年',
        align: 'center',
        width: 40,
        dataIndex: 'underage_flg'
    },
    {
        title: '督促メール最終送信日時',
        align: 'center',
        width: 40,
        dataIndex: 'last_reminder_mail_sent_datetime'
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
