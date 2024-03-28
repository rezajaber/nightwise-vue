<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "../src/components/NightwiseHeader.vue";
</script>

<template>
  <div class="dark min-h-screen bg-background">
    <Header />
    <RouterView />
  </div>
</template>
