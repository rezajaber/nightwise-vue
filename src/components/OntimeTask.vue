<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";

import TaskCounter from "../components/OntimeTaskCounter.vue";

const ontimeTasks = [
  { id: 1, label: "write the bachelor thesis" },
  { id: 2, label: "be on discord" },
  { id: 3, label: "visit volleyball tomorrow" },
];
</script>

<template>
  <div>
    <TaskCounter />

    <div v-for="task in ontimeTasks" key="task.id" class="mt-5 grid gap-5 pl-4">
      <div class="flex items-center space-x-2">
        <Checkbox />
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {{ task.label }}
        </label>
      </div>
    </div>
  </div>
</template>
