import App from '@/App.vue';
import router from '@/routes';
import { createApp } from 'vue';
import useAuth from '@/composable/auth';

(async () => {
  try {
    const { isAuthenticated, userManager } = useAuth();
    await userManager.signinSilent();
    isAuthenticated.value = true;
  } catch (error) {
    console.log('Not singed in.');
  }
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
})();
