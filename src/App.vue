<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "../src/components/NightwiseHeader.vue";
</script>

<template>
  <div class="px-5 py-5 sm:px-10 md:px-14 lg:px-40 xl:px-60 2xl:px-80">
    <Header />
    <RouterView />
  </div>
</template>
