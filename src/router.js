import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HeroList from './views/HeroList';
import HeroPage from './views/HeroPage';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/teams/:teamId',
          name: 'team',
          component: HeroList,
          children: [
            {
              path: '/teams/:teamId/heroes/:heroId',
              name: 'hero',
              component: HeroPage,
            },
          ],
        },
      ],
    },
  ],
});
