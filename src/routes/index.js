import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'),
      // 코드 스플리팅 : 처음에 모든 페이지를 로딩해서 가져오지 않고 해당 페이지만 동적으로 그때 그때 가져오는 방법
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});
