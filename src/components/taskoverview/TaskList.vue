<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { onMounted, ref } from "vue";
import { getTasks } from "@/lib/api/task";

const tasks = ref([]);

const fetchTasks = async () => {
  tasks.value = await getTasks();
};

onMounted(fetchTasks);
</script>

<template>
  <div>
    <div>
      <div class="flex justify-between">
        <p class="align-middle text-sm font-semibold">Ontime</p>
        <p class="text-sm font-semibold">3</p>
      </div>

      <Separator class="mt-1 bg-primary" />
    </div>

    <div v-for="task in tasks" :key="task.id" class="mt-5 grid gap-5 pl-4">
      <div class="flex items-center space-x-2">
        <Checkbox />

        <label
          class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Test
        </label>
      </div>
    </div>
  </div>
</template>