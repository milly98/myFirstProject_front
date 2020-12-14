import Vue from 'vue'
//import App from './App.vue'
import Front from './pages/ChatDevelop.vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Front),
}).$mount('#app')
