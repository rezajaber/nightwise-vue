<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "../src/components/NightwiseHeader.vue";
</script>

<template>
  <div
    class="dark grid min-h-screen place-content-center gap-5 bg-background px-4 py-5"
  >
    <RouterView />
  </div>
</template>
