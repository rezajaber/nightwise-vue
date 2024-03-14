<script setup lang="ts">
import SearchTask from "../components/SearchTask.vue";
import OverdueTask from "../components/OverdueTask.vue";
import OntimeTask from "../components/OntimeTask.vue";
import ControlBar from "../components/ControlBar.vue";
</script>

<template>
  <main class="mt-5 flex gap-8">
    <div class="w-fit">
      <SearchTask />
      <OverdueTask class="mt-5" />
      <OntimeTask class="mt-8" />
    </div>

    <div class="w-full">
      <ControlBar />
    </div>
  </main>
</template>
../components/OverdueTaskCounter.vue
