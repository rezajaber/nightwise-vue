<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";

import { ref } from "vue";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { createTask as createTaskApi } from "@/lib/api/task"; // Assuming this is the API call

const taskTitle = ref("");
const taskDescription = ref("");
const category = ref("");
let due_date = ref(new Date());

const createTask = async () => {
  if (taskTitle.value.trim()) {
    await createTaskApi(
      taskTitle.value,
      taskDescription.value,
      category.value,
      due_date.value,
    );
    taskTitle.value = "";
    taskDescription.value = "";
    // Reset input after creation
    // Optionally, emit an event to notify parent components to refresh the task list
  }
  window.location.reload();
};

const handleEnter = () => {
  createTask(); // Call the existing createTask function
};
</script>

<template>
  <div>
    <ControlBar @create-task="createTask" />

    <Input
      v-model="taskTitle"
      @keyup.enter="handleEnter"
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 px-0 text-3xl focus-visible:outline-none focus-visible:ring-0"
    />

    <TaskSideInformation
      @set-date="due_date = $event"
      @update-category="category = $event"
      class="mt-7"
    />
    <Textarea
      @keyup.enter="handleEnter"
      v-model="taskDescription"
      placeholder="Some more context"
    />
  </div>
</template>
