import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

// router setup
import router from './routes/router';

import VueRouterUserRoles from "vue-router-user-roles";
Vue.use(VueRouterUserRoles, { router });

//axios setup
import axios from 'axios'
Vue.prototype.$ajax = axios

// plugin setup
Vue.use(DashboardPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
