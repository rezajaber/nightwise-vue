<script setup lang="ts">
import { defineProps } from "vue";
import { Button } from "@/components/ui/button";

const props = defineProps({
  mode: String,
});
const emits = defineEmits(["create-task"]); // Added "task-deleted" to notify parent components

const onCreateClick = () => {
  emits("create-task");
};
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-2">
      <Button
        size="xs"
        class="border-none bg-accent text-white"
        @click="onCreateClick"
        >{{ props.mode }}</Button
      >

      <Button size="xs" class="border-none bg-accent text-white">Delete</Button>
    </div>

    <div class="flex items-center gap-2">
      <Button size="xs" class="border-none bg-accent"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-up-left"
        >
          <path d="M5 11V5H11" />
          <path d="M5 5L19 19" /></svg
      ></Button>

      <Button size="xs" class="border-none bg-accent"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-down"
        >
          <path d="M8 18L12 22L16 18" />
          <path d="M12 2V22" /></svg
      ></Button>

      <Button size="xs" class="border-none bg-accent text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-down-right"
        >
          <path d="M19 13V19H13" />
          <path d="M5 5L19 19" /></svg
      ></Button>
    </div>
  </div>
</template>
