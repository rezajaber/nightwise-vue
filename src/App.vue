<script setup lang="ts">
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { Button } from "@/components/ui/button";

import Toaster from "@/components/ui/toast/Toaster.vue";

const showPreloader = ref(true);

onMounted(() => {
  setTimeout(() => {
    showPreloader.value = false;
  }, 2000); // Adjust the time according to your needs
});
</script>

<template>
  <!-- THIS IS WHERE THE APP ENDS WITH POCKETBASE LOCAL INSTANCE -->
  <Transition>
    <div
      v-if="showPreloader"
      class="dark fixed inset-0 z-50 flex items-center justify-center bg-background text-xl tracking-wide text-white"
    >
      <Button class="animate-bounce">nightwise</Button>
    </div>
  </Transition>

  <Toaster />

  <div
    class="dark grid min-h-screen place-content-center gap-5 bg-background px-4 py-5"
  >
    <RouterView />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
