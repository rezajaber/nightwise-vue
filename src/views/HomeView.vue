<script setup lang="ts">
import TaskOverview from "@/components/TaskOverview.vue";
import TaskCreation from "@/components/TaskCreation.vue";
import TaskCreationFuller from "@/components/TaskCreationFuller.vue";
</script>

<template>
  <main class="mt-8 sm:flex sm:gap-8">
    <TaskOverview />

    <!-- <TaskCreation class="hidden w-full sm:block" /> -->
    <TaskCreationFuller class="hidden w-full sm:block" />
  </main>
</template>
