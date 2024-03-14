<script setup lang="ts">
import SearchTask from "../components/SearchTask.vue";
import TaskCounter from "../components/TaskCounter.vue";
import OverdueTask from "../components/OverdueTask.vue";
import OntimeTask from "../components/OntimeTask.vue";
</script>

<template>
  <main class="w-fit">
    <SearchTask class="mt-4" />
    <OverdueTask class="mt-4" />
    <OntimeTask class="mt-8" />
  </main>
</template>
../components/OverdueTaskCounter.vue
