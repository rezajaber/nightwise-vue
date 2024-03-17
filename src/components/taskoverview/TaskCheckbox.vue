<script setup lang="ts">
import { ref } from "vue";
import { Checkbox } from "@/components/ui/checkbox";

const onTimeTasks = ref([
  { id: 1, label: "create Header" },
  { id: 2, label: "create Footer" },
  { id: 3, label: "create Test" },
]);
</script>

<template>
  <div v-for="task in onTimeTasks" key="task.id" class="mt-5 grid gap-5 pl-4">
    <div class="flex items-center space-x-2">
      <Checkbox />
      <label
        class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {{ task.label }}
      </label>
    </div>
  </div>
</template>
