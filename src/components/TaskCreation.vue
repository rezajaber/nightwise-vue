<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";

import { ref, watch } from "vue";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { createTask, updateTask, deleteTask } from "@/lib/api/task";

const props = defineProps({
  task: Object,
});

const taskTitle = ref("");
const taskDescription = ref("");
const category = ref("");
let due_date = ref(new Date());

watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      taskTitle.value = newTask.title;
      taskDescription.value = newTask.description;
      category.value = newTask.category;
      due_date.value = new Date(newTask.due_date);
    }
  },
  { immediate: true },
);

const createOrUpdateTask = async () => {
  if (props.task?.id) {
    await updateTask(
      props.task.id,
      taskTitle.value,
      taskDescription.value,
      category.value,
      due_date.value,
    );
  } else {
    await createTask(
      taskTitle.value,
      taskDescription.value,
      category.value,
      due_date.value,
    );
  }
  window.location.reload();
};

const handleEnter = () => {
  createOrUpdateTask(); // Call the existing createTask function
};

const deleteSelectedTask = async () => {
  if (props.task?.id) {
    try {
      await deleteTask(props.task.id);
      window.location.reload();
    } catch (error) {
      console.error("Failed to delete the task:", error);
    }
  } else {
    console.error("Task ID is missing.");
  }
};
</script>

<template>
  <div
    class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
  >
    <ControlBar
      :mode="props.task?.id ? 'Update' : 'Create'"
      @create-task="createOrUpdateTask"
      @delete-task="deleteSelectedTask"
    />

    <Input
      v-model="taskTitle"
      @keyup.enter="handleEnter"
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 bg-secondary px-0 pl-4 text-3xl text-primary caret-accent focus-visible:outline-none focus-visible:ring-0"
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
      class="mt-7 bg-secondary pl-4 text-primary caret-accent"
    />
  </div>
</template>
