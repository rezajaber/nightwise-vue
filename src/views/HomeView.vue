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
  <main class="gap-6 md:flex">
    <TaskOverview class="w-full" @task-edited="handleTaskEdited" />
    <TaskCreation :task="editedTask" class="hidden w-full sm:block" />
  </main>
</template>
