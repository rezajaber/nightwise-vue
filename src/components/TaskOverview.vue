<script setup lang="ts">
import TaskSearch from "./taskoverview/TaskSearch.vue";
import TaskList from "./taskoverview/TaskList.vue";
import { ref } from "vue";

const selectedTask = ref(null);

const onEditTask = (task) => {
  selectedTask.value = task;

  emit("task-edited", task);
};

const emit = defineEmits(["task-edited"]);
</script>

<template>
  <div class="rounded-md bg-card px-4 py-5">
    <TaskSearch />
    <TaskList @edit-task="onEditTask" class="mt-9" />
  </div>
</template>
