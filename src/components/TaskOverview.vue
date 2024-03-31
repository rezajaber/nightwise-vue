<script setup lang="ts">
import TaskSearch from "./taskoverview/TaskSearch.vue";
import TaskList from "./taskoverview/TaskList.vue";

import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="grid gap-4 md:py-0">
    <div
      class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
    >
      <TaskSearch />
      <TaskList class="mt-9" />
    </div>

    <Button class="gap-1 md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-plus"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" /></svg
      >Add a Task</Button
    >
  </div>
</template>
