jsld
<script setup lang="ts">
import { ref } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
</script>

<template>
  <div key="task.id" class="mt-5 grid gap-5 pl-4">
    <div class="flex items-center space-x-2">
      <Checkbox />

      <label
        class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        test this checkbox
      </label>
    </div>
  </div>
</template>
