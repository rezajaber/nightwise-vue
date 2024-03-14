<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
</script>

<template>
  <div class="grid gap-5">
    <div class="flex items-center space-x-2">
      <Checkbox class="border-red-700 data-[state=checked]:bg-red-600" />
      <label
        class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        create Header
      </label>
    </div>

    <div class="flex items-center space-x-2">
      <Checkbox class="border-red-700 data-[state=checked]:bg-red-600" />
      <label
        class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        create Header
      </label>
    </div>

    <div class="flex items-center space-x-2">
      <Checkbox class="border-red-700 data-[state=checked]:bg-red-600" />
      <label
        class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        create Header
      </label>
    </div>
  </div>
</template>
