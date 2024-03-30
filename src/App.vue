<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";

import { RouterView } from "vue-router";
</script>

<template>
  <Toaster />

  <div
    class="dark grid min-h-screen place-content-center gap-5 bg-background px-4 py-5"
  >
    <RouterView />
  </div>
</template>
