<script setup lang="ts">
import TaskSearchInput from "./TaskSearchInput.vue";
import TaskSearchState from "./TaskSearchState.vue";
</script>

<template>
  <div class="flex min-w-72 flex-col gap-2.5">
    <TaskSearchInput />
    <TaskSearchState />
  </div>
</template>
