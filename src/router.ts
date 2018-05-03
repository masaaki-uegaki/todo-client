import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Tasks from './views/Tasks.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
    },
  ],
});
