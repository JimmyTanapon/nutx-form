import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend
} from 'vee-validate'
import { required, numeric } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'กรุณาระบุ'
})

extend('numeric', {
  ...numeric,
  message: 'อายุต้องเป็นตัวเลขเท่านั้น'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
