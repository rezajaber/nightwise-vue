<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";

import { ref } from "vue";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

let taskTitle = ref("");
</script>

<template>
  <div>
    <ControlBar />
    <Input
      v-model="taskTitle"
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 px-0 text-3xl focus-visible:outline-none focus-visible:ring-0"
    />

    <TaskSideInformation class="mt-7" />
    <Textarea placeholder="Some more context" />
  </div>
</template>
