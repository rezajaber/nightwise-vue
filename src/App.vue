<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "../src/components/NightwiseHeader.vue";
</script>

<template>
  <div class="dark grid min-h-screen place-content-center bg-background">
    <RouterView />
  </div>
</template>
