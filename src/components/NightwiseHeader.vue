<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const toggleTheme = ref(false);

const switchTheme = () => {
  toggleTheme.value = !toggleTheme.value;
};
</script>

<template>
  <div class="flex items-center justify-between">
    <p class="tracking font-display text-sm font-semibold text-primary">
      nightwise
    </p>
    <RouterLink to="/"
      ><img class="w-6 cursor-pointer" src="../assets/img/nightwise.png" alt=""
    /></RouterLink>
  </div>
</template>
