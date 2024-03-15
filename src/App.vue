<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "../src/components/NightwiseHeader.vue";
</script>

<template>
  <div class="px-96 py-5">
    <Header />
    <RouterView />
  </div>
</template>
