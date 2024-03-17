<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import Task from "./TaskCheckbox.vue";
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

    <Task />
  </div>
</template>
