import App from '@/App.vue';
import router from '@/routes';
import { createApp } from 'vue';
import userManager from '@/auth';

(async () => {
  try {
    await userManager.signinSilent();
  } catch (error) {
    console.log('Not singed in.');
  }
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
})();
