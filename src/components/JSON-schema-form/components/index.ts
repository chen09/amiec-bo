// const path = require('path')
//
// const file = require.context('./', true, /\.vue/)
const components = {}
// file.keys().forEach((key) => {
//   const name = path.basename(key, '.vue')
//   components[name] = file(key).default || file(key)
// })

import SchemaFormCheckbox from './schema-form-checkbox.vue'
import SchemaFormInput from './schema-form-input.vue'
import SchemaFormInputNumber from './schema-form-input-number.vue'
import SchemaFormRadio from './schema-form-radio.vue'
import SchemaFormSelect from './schema-form-select.vue'
import SchemaFormSwitch from './schema-form-switch.vue'
import SchemaFormTextarea from './schema-form-textarea.vue'

components['schema-form-checkbox'] =  SchemaFormCheckbox
components['schema-form-input'] =  SchemaFormInput
components['schema-form-input-number'] =  SchemaFormInputNumber
components['schema-form-radio'] =  SchemaFormRadio
components['schema-form-select'] =  SchemaFormSelect
components['schema-form-switch'] =  SchemaFormSwitch
components['schema-form-textarea'] =  SchemaFormTextarea

export default components
