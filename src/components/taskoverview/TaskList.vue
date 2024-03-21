<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { onMounted, ref } from "vue";
import { getTasks as getTasksApi } from "@/lib/api/task"; // Assuming this is the API call

const tasks = ref([]);

onMounted(async () => {
  tasks.value = await getTasksApi();
  console.log(tasks);
});

function truncateText(text: string, limit: number = 50) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}
</script>

<template>
  <div>
    <div>
      <div class="flex justify-between">
        <p class="align-middle text-sm font-semibold">Ontime</p>
        <p class="text-sm font-semibold">{{ tasks.length }}</p>
      </div>

      <Separator class="mt-1 bg-primary" />
    </div>

    <div v-for="task in tasks" :key="task.id" class="gap- mt-5 grid gap-2 pl-4">
      <div class="flex items-center space-x-2">
        <Checkbox />

        <label
          class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {{ task.title }}
        </label>
      </div>

      <p class="break-all pl-6 text-justify text-xs">
        {{ truncateText(task.description) }}
      </p>
    </div>
  </div>
</template>
