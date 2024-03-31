<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

import { onMounted, ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";

function truncateText(text: string, limit: number = 50) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}
const taskStore = useTaskStore();
const tasks = ref([]);

onMounted(async () => {
  await taskStore.fetchTasks();
  tasks.value = taskStore.tasks;
});
</script>

<template>
  <div>
    <div>
      <div class="flex justify-between text-primary">
        <p class="align-middle text-sm font-semibold">Ontime</p>
        <p class="text-sm font-semibold">{{ tasks.length }}</p>
      </div>

      <Separator class="mt-1 bg-primary" />
    </div>

    <div class="no-scrollbar h-96 overflow-x-hidden overflow-y-scroll">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="mt-5 grid cursor-pointer gap-1.5 rounded-lg pl-4 duration-300 ease-in-out hover:scale-105"
      >
        <div class="flex items-center space-x-2 text-primary">
          <Checkbox v-model="task.completed" />

          <label
            class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {{ truncateText(task.title) }}
          </label>
        </div>

        <p class="break-all pl-6 text-justify text-xs text-primary opacity-60">
          {{ truncateText(task.description) }}
        </p>
      </div>
    </div>
  </div>
</template>
