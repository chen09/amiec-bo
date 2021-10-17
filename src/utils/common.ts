import dayjs from 'dayjs'

/***
 * @description 格式化日期
 * @param time
 */
export const formatDate = (time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')
