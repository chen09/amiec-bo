import dayjs from 'dayjs'

/***
 * @description 格式化日期
 * @param time
 */
export const formatDate = (time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')

export const formatPurchaseStatus = (status) => {
    if (!status) return ''
    const statuses = {
        '1': '買取受付',
        '2': '査定済',
        '3': '返答待ち',
        '4': '査定額承認済',
        '5': '査定額一部承認',
        '6': '査定額承認拒否',
        '7': '再査定中',
        '8': '買取確定',
        '9': '買取キャンセル',
        '10': '確定後キャンセル',
        '11': '買取金支払済',
        '12': '下取仮確定',
        '13': '下取確定待ち',
    }
    return status + ':' + statuses[status]
}


export const formatReturnStatus = (status) => {
    if (!status) return ''
    const statuses = {
        '1': '未設定',
        '2': '要返却',
        '3': '返却処理済',
    }
    return status + ':' + statuses[status]
}


export const IS_PROD = false
export const IS_DEV = true

