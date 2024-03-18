<script setup lang="ts">
import TaskOverview from "@/components/TaskOverview.vue";
import TaskCreation from "@/components/TaskCreation.vue";
import TaskCreationFuller from "@/components/TaskCreationFuller.vue";
import { getTasks, createTask } from "@/lib/api/task";
import { onMounted, ref } from "vue";

let tasks = ref(undefined);

onMounted(async () => {
  tasks = (await getTasks()).items;
  console.log(tasks);
  console.log("Creating new task");
  const newTask = await createTask("Hallo Welt");
  console.log(newTask);
  tasks = (await getTasks()).items;
  console.log(tasks);
});
</script>

<template>
  <main class="mt-8 sm:flex sm:gap-8">
    <TaskOverview />

    <!-- <TaskCreation class="hidden w-full sm:block" /> -->
    <TaskCreationFuller class="hidden w-full sm:block" />
  </main>
</template>
