import GoodsForm from './goods-form.vue'
import mockTags from './mockTags.json'
import _ from 'lodash'
import {createVNode, VNode} from 'vue'
import {Tag} from 'ant-design-vue'

export {GoodsForm}

export const formatCurrency = (amount) =>
    amount.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})

export function convertTags(tags = {}) {
    const array: VNode[] = []
    _.forEach(tags, function (values, key) {
        if (!_.hasIn(mockTags, key)) {
            return
        }
        _.forIn(values, function (value) {
            const tagAttributes = _.get(mockTags, key)
            if (!_.hasIn(_.get(tagAttributes, 'values'), value)) {
                return
            }
            const thisValues = _.get(tagAttributes, 'values')
            array.push(
                createVNode(
                    Tag,
                    {color: _.get(tagAttributes, 'color')},
                    {default: () => value + ':' + _.get(thisValues, value)}
                )
            )
            // array = _.concat(
            //   array,
            //
            // )
        })
    })
    return array
}
