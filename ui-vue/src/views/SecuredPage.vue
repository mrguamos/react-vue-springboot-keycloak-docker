<template>
  <Suspense>
    <template #default><Secured /> </template>
    <template #fallback><div>Loading...</div> </template>
  </Suspense>
</template>

<script>
import Secured from '@/components/Secured.vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: { Secured },
});
</script>

<style></style>

Secured
