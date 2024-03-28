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

const taskCreationShown;
</script>

<template>
  <div
    class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
  >
    <TaskSearch />
    <TaskList @edit-task="onEditTask" class="mt-9" />
  </div>
</template>
