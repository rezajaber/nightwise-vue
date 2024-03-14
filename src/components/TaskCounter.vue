<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
</script>

<template>
  <div>
    <div class="flex justify-between">
      <p class="text-red-700 align-middle text-sm font-semibold">Overdue</p>
      <p class="text-red-700 text-sm font-semibold">2</p>
    </div>

    <Separator class="bg-red-600 mt-1" />
  </div>
</template>
