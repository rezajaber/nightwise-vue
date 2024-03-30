<script setup lang="ts">
import TaskOverview from "@/components/TaskOverview.vue";
import TaskCreation from "@/components/TaskCreation.vue";
import { ref } from "vue";

const editedTask = ref(null);

// This function is triggered when the `task-edited` event is caught.
const handleTaskEdited = (task) => {
  editedTask.value = task;
  console.log("Homeview:", editedTask.value);
};
</script>

<template>
  <main class="grid gap-4 md:flex md:gap-6">
    <TaskOverview
      class="h-fit md:h-auto md:w-fit"
      @task-edited="handleTaskEdited"
    />
    <TaskCreation :task="editedTask" class="w-fit md:h-auto md:w-[32rem]" />
  </main>
</template>
