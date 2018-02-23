import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import header from '@/components/header';
import footer from '@/components/footer';
// import profiles from '@/components/profiles';
// import skills from '@/components/skills';

Vue.use(Router);
Vue.component('headerStuff', header)
// Vue.component('dinoCard', profiles)
Vue.component('footerStuff', footer)
// Vue.component('listOfSkills', skills)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
