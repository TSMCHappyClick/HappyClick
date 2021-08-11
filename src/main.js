import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

import i18n from './vue-i18n'
Vue.config.productionTip = false
Vue.use(i18n);

// router setup
import router from './routes/router';

import VueRouterUserRoles from "vue-router-user-roles";
Vue.use(VueRouterUserRoles, { router });

//axios setup
import axios from 'axios'
Vue.prototype.$ajax = axios

// plugin setup
Vue.use(DashboardPlugin);

//for deploy on heroku
axios.defaults.withCredentials = true

//prevent localStorage be modified
window.addEventListener('storage', (e) =>{
  localStorage.setItem(e.key, e.oldValue)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  i18n
});
