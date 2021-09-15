import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'home', /* event */
        component: () => import(/* webpackChunkName: "about" */ '../components/Profile.vue'),
      },
      {
        path: '/profile',
        name: 'profile', /* event */
        component: () => import(/* webpackChunkName: "about" */ '../components/Profile.vue'),
      },
      {
        path: '/good',
        name: 'good',
        component: () => import(/* webpackChunkName: "about" */ '../components/Good.vue'),
      },
      {
        path: '/commission',
        name: 'commission',
        component: () => import(/* webpackChunkName: "about" */ '../components/Commission.vue'),
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: () => import(/* webpackChunkName: "about" */ '../components/Gallery.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
