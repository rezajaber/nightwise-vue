<script setup lang="ts">
import { RouterView } from "vue-router";
import Toaster from "@/components/ui/toast/Toaster.vue";
import Header from "../src/components/NightwiseHeader.vue";
</script>

<template>
  <Toaster />

  <div
    class="dark grid min-h-screen place-content-center gap-5 bg-background px-4 py-5"
  >
    <RouterView />
  </div>
</template>
