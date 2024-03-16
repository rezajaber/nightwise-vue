<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";

import OverdueTaskCounter from "../components/OverdueTaskCounter.vue";

const overdueTasks = [
  { id: 1, label: "solve searchbar problem" },
  { id: 2, label: "solve number problem" },
  { id: 3, label: "solve resposiveness problem" },
];
</script>

<template>
  <div>
    <OverdueTaskCounter />

    <div
      v-for="task in overdueTasks"
      :key="task.id"
      class="mt-5 grid gap-5 pl-4"
    >
      <div class="grid gap-1.5">
        <div class="flex items-center space-x-2">
          <Checkbox class="border-red-700 data-[state=checked]:bg-red-600" />

          <label
            class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {{ task.label }}
          </label>
        </div>
        <Categories />
      </div>
    </div>
  </div>
</template>
./OverdueTaskCounter.vue./OntimeTaskCounter.vue
