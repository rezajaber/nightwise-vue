<script setup lang="ts">
import TaskSearch from "./taskoverview/TaskSearch.vue";
import TaskList from "./taskoverview/TaskList.vue";
import { ref, defineEmits } from "vue";

const selectedTask = ref(null);

const onEditTask = (task) => {
  selectedTask.value = task;
  console.log("task:", task);
  emit("task-edited", task);
};

const emit = defineEmits(["task-edited"]);
</script>

<template>
  <div>
    <TaskSearch />
    <TaskList @edit-task="onEditTask" class="mt-9" />
  </div>
</template>
