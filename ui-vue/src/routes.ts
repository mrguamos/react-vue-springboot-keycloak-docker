import HelloWorld from '@/components/HelloWorld.vue';
import SecuredPage from '@/views/SecuredPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import userManager from '@/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HelloWorld,
      props: {
        msg: 'Vue Keycloak Tutorial',
      },
    },
    {
      path: '/secured',
      component: SecuredPage,
      beforeEnter: async (to, from, next) => {
        const user = await userManager.getUser();
        if (!user) {
          localStorage.setItem('route', to.fullPath);
          await userManager.signinRedirect();
          next({});
        } else next();
      },
    },
  ],
});

export default router;
