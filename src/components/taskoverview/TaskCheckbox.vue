<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
import { getTasks as getTasksApi } from "@/lib/api/task"; // Assuming this is the API call

const tasks = ref([]);
console.log(tasks);

onMounted(async () => {
  tasks.value = await getTasksApi();
  console.log(tasks.value);
});
</script>

<template>
  <div v-for="task in tasks" :key="task.id" class="mt-5 grid gap-5 pl-4">
    <div class="flex items-center space-x-2">
      <Checkbox />
      <label
        class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {{ task.title }}
        <!-- Ensure your task object has a title property -->
      </label>
    </div>
  </div>
</template>
