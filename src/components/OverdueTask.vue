<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";

import Categories from "../components/Categories.vue";
import OverdueTaskCounter from "../components/OverdueTaskCounter.vue";
</script>

<template>
  <div>
    <OverdueTaskCounter />

    <div class="mt-5 grid gap-5 pl-4">
      <div class="grid gap-1.5">
        <div class="flex items-center space-x-2">
          <Checkbox class="border-red-700 data-[state=checked]:bg-red-600" />

          <label
            class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            create Header
          </label>
        </div>
        <Categories />
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
  </div>
</template>
./OverdueTaskCounter.vue./OntimeTaskCounter.vue
