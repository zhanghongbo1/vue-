import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './icons'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myAxios from '@/utils/request'
Vue.use(ElementUI);
Vue.prototype.$axios=myAxios
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
