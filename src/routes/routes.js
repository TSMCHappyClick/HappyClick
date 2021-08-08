import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')        
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/reserve',
        name: 'reserve',
        component: () => import('../views/Reserve.vue')
      },
      {
        path: '/check',
        name: 'check',
        component: () => import('../views/Check.vue')
      },
      {
        path: '/health',
        name: 'health',
        component: () => import('../views/Health.vue'),
        meta: {
          permissions: [
            {
              role: "guest",
              access: false,
              redirect: "login"
            }
          ]
        }
      },
    ]
  },
  { path: '*', component: NotFound }
];

export default routes;
