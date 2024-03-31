<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
</script>

<template>
  <div
    class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
  >
    <ControlBar />

    <Input
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 bg-secondary px-0 pl-4 text-3xl text-primary caret-accent focus-visible:outline-none focus-visible:ring-0"
    />

    <TaskSideInformation class="mt-7" />

    <Textarea
      placeholder="Some more context"
      class="mt-7 bg-secondary pl-4 text-primary caret-accent"
    />
  </div>
</template>
