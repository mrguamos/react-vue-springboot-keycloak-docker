<template>
  <div>
    <p>Message from secured resource : {{ data }}</p>
  </div>
  <div>
    <button @click="back">Back</button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import router from '@/routes';
import axios from 'axios';
import userManager from '@/auth';

export default defineComponent({
  setup: async () => {
    const user = await userManager.getUser();
    const { data } = await axios.get('/api/secured', {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    });

    const back = () => {
      router.push('/');
    };
    return { back, data };
  },
});
</script>

<style></style>
