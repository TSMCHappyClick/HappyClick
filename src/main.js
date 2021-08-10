import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import i18n from './common/plugins/vue-i18n'
// router setup
import router from './routes/router';

import VueRouterUserRoles from "vue-router-user-roles";
Vue.use(VueRouterUserRoles, { router });
Vue.config.productionTip = false
//axios setup
import axios from 'axios'
Vue.prototype.$ajax = axios

// plugin setup
Vue.use(DashboardPlugin);


//prevent localStorage be modified
window.addEventListener('storage', (e) =>{
  localStorage.setItem(e.key, e.oldValue)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app')