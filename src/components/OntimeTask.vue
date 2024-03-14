<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";

import TaskCounter from "../components/OntimeTaskCounter.vue";
</script>

<template>
  <div>
    <TaskCounter />

    <div class="mt-5 grid gap-5 pl-4">
      <div class="flex items-center space-x-2">
        <Checkbox />
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          create Header
        </label>
      </div>

      <div class="flex items-center space-x-2">
        <Checkbox />
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          create Header
        </label>
      </div>

      <div class="flex items-center space-x-2">
        <Checkbox />
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          create Header
        </label>
      </div>
    </div>
  </div>
</template>
./OverdueTaskCounter.vue
