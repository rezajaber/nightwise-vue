<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-2">
      <Button size="xs">Close</Button>

      <Button size="xs"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-up-left"
        >
          <path d="M5 11V5H11" />
          <path d="M5 5L19 19" /></svg
      ></Button>

      <Button size="xs"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-down-right"
        >
          <path d="M19 13V19H13" />
          <path d="M5 5L19 19" /></svg
      ></Button>
    </div>

    <div class="flex items-center gap-2">
      <Button size="xs">Delete</Button>

      <Button size="xs"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-left"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" /></svg
      ></Button>
      <Button size="xs"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-down"
        >
          <path d="M8 18L12 22L16 18" />
          <path d="M12 2V22" /></svg
      ></Button>
      <Button size="xs"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-right"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" /></svg
      ></Button>
    </div>
  </div>
</template>
