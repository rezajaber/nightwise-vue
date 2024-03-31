<script setup lang="ts">
import TaskOverview from "@/components/TaskOverview.vue";
import TaskCreation from "@/components/TaskCreation.vue";
</script>

<template>
  <main class="grid gap-4 md:flex md:gap-6">
    <TaskOverview class="h-fit w-full md:h-auto lg:w-fit" />
    <TaskCreation class="w-full md:h-auto lg:w-[32rem] xl:w-[40rem]" />
  </main>
</template>
