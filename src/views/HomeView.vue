<script setup lang="ts">
import TaskOverview from "@/components/TaskOverview.vue";
import TaskCreation from "@/components/TaskCreation.vue";
import { ref } from "vue";

const editedTask = ref(null);

// This function is triggered when the `task-edited` event is caught.
const handleTaskEdited = (task) => {
  editedTask.value = task;
};
</script>

<template>
  <main class="mt-8 sm:flex sm:gap-6">
    <TaskOverview @task-edited="handleTaskEdited" />
    <TaskCreation :task="editedTask" class="hidden w-full sm:block" />
  </main>
</template>
