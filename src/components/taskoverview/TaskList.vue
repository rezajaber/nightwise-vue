<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { onMounted, ref } from "vue";
import { getTasks as getTasksApi } from "@/lib/api/task"; // Assuming this is the API call
import { defineEmits } from "vue";

const tasks = ref([]);

const emit = defineEmits(["edit-task"]);

const editTask = (task) => {
  emit("edit-task", task);
};
onMounted(async () => {
  tasks.value = await getTasksApi();
});

function truncateText(text: string, limit: number = 50) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}
</script>

<template>
  <div>
    <div class="">
      <div class="flex justify-between text-primary">
        <p class="align-middle text-sm font-semibold">Ontime</p>
        <p class="text-sm font-semibold">{{ tasks.length }}</p>
      </div>

      <Separator class="mt-1 bg-primary" />
    </div>

    <div
      v-for="task in tasks"
      :key="task.id"
      @click="editTask(task)"
      class="mt-5 grid cursor-pointer gap-1.5 rounded-lg pl-4 duration-300 ease-in-out hover:scale-105"
    >
      <div class="flex items-center space-x-2 text-primary">
        <Checkbox />

        <label
          class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {{ task.title }}
        </label>
      </div>

      <p class="break-all pl-6 text-justify text-xs text-primary opacity-60">
        {{ truncateText(task.description) }}
      </p>
    </div>
  </div>
</template>
