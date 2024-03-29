<script setup lang="ts">
import TaskSearch from "./taskoverview/TaskSearch.vue";
import TaskList from "./taskoverview/TaskList.vue";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
const selectedTask = ref(null);

const onEditTask = (task) => {
  selectedTask.value = task;

  emit("task-edited", task);
};

const emit = defineEmits(["task-edited"]);
</script>

<template>
  <div class="grid gap-4 md:py-0">
    <div
      class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
    >
      <TaskSearch />
      <TaskList
        @edit-task="onEditTask"
        class="no-scrollbar mt-9 h-96 overflow-x-hidden overflow-y-scroll"
      />
    </div>

    <Button class="md:hidden">Add a Task</Button>
  </div>
</template>
