<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const title = ref("");
const description = ref("");
const category_id = ref("");

const taskStore = useTaskStore();

const createTask = async () => {
  await taskStore.addTask(
    title.value,
    description.value,
    category_id.value,
    new Date(),
  );
  title.value = "";
  description.value = "";
};
</script>

<template>
  <div
    class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
  >
    <ControlBar @create-task="createTask" />

    <Input
      v-model="title"
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 bg-secondary px-0 pl-4 text-3xl text-primary caret-accent focus-visible:outline-none focus-visible:ring-0"
    />

    <TaskSideInformation class="mt-7" />

    <Textarea
      v-model="description"
      placeholder="Some more context"
      class="mt-7 bg-secondary pl-4 text-primary caret-accent"
    />
  </div>
</template>
