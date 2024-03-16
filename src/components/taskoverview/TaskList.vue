<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const ontimeTasks = [
  { id: 1, label: "write the bachelor thesis" },
  { id: 2, label: "be on discord" },
  { id: 3, label: "visit volleyball tomorrow" },
];

const overdueTasks = [
  { id: 1, label: "write the bachelor thesis" },
  { id: 2, label: "be on discord" },
  { id: 3, label: "visit volleyball tomorrow" },
];
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

    <div class="mt-9">
      <div class="flex justify-between">
        <p class="align-middle text-sm font-semibold text-red-700">Overdue</p>
        <p class="text-sm font-semibold text-red-700">2</p>
      </div>

      <Separator class="mt-1 bg-red-600" />
    </div>

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
