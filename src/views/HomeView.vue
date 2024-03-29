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
  <main class="grid gap-4 md:flex md:gap-6">
    <TaskOverview
      class="h-fit w-full md:h-auto"
      @task-edited="handleTaskEdited"
    />
    <TaskCreation :task="editedTask" class="w-full md:h-auto" />
  </main>
</template>
