import Vue from 'vue'
import VueToast from 'vue-toast-notification'
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css'
import 'vue-toast-notification/dist/theme-sugar.css'

Vue.use(VueToast, {
  position: 'top-right',  //	One of success, info, warning, error, default
  duration: 3000          // One of top, bottom, top-right, bottom-right,top-left, bottom-left
})

// example

// this.$toast.open({
//   message: 'แก้ไขข้อมูลสำเร็จ',
//   type: 'info',
// })