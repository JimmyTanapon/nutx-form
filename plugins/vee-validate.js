import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend
} from 'vee-validate'
import { required, numeric, email, length } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'กรุณาระบุ {_field_}'
})

extend('numeric', {
  ...numeric,
  message: '{_field_} ต้องเป็นตัวเลขเท่านั้น'
})
extend('email', {
  ...email,
  message: 'รูปเเบบ emailไม่ถูกต้อง'
})
extend('length', {
  ...length,
  message: '{_field_} ต้องไม่มากกว่าหรือน้อยกว่า 10'
})
extend('postalCodelength', {
  ...length,
  message: '{_field_} ต้องไม่มากกว่าหรือน้อยกว่า 4'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
