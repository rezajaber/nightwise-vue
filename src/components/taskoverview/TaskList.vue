<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

import { onMounted, ref, computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";

function truncateText(text: string, limit: number = 40) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.fetchTasks();
});

function selectTask(task) {
  taskStore.selectTask(task);
}

const props = defineProps({
  searchQuery: String,
});

function isOverdue(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  return due < today;
}

const filteredTasks = computed(() => {
  let tasks = taskStore.tasks;
  if (props.searchQuery) {
    tasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(props.searchQuery.toLowerCase()),
    );
  }
  return tasks;
});
</script>

<template>
  <div>
    <div class="flex justify-between">
      <!-- Conditional styling for the "Overdue"/"Ontime"/"Tasks" header -->
      <p
        :class="{
          'text-red-700':
            taskStore.selectedTask &&
            isOverdue(taskStore.selectedTask.due_date),
          'text-primary':
            !taskStore.selectedTask ||
            !isOverdue(taskStore.selectedTask.due_date),
          'align-middle': true,
          'text-sm': true,
          'font-semibold': true,
        }"
      >
        {{
          taskStore.selectedTask
            ? isOverdue(taskStore.selectedTask.due_date)
              ? "Overdue"
              : "Ontime"
            : "Tasks"
        }}
      </p>
      <!-- Conditional styling for the tasks count -->
      <p
        :class="{
          'text-red-700':
            taskStore.selectedTask &&
            isOverdue(taskStore.selectedTask.due_date),
          'text-primary':
            !taskStore.selectedTask ||
            !isOverdue(taskStore.selectedTask.due_date),
          'text-sm': true,
          'font-semibold': true,
        }"
      >
        {{ filteredTasks.length }}
      </p>
    </div>

    <!-- Use bg-primary for the separator by default, switch to bg-red-700 if a task is overdue -->
    <Separator
      :class="{
        'bg-red-700':
          taskStore.selectedTask && isOverdue(taskStore.selectedTask.due_date),
        'bg-primary':
          !taskStore.selectedTask ||
          !isOverdue(taskStore.selectedTask.due_date),
        'mt-1': true,
      }"
    />
  </div>

  <div>
    <div class="no-scrollbar h-96 overflow-x-hidden overflow-y-scroll">
      <div
        v-for="task in filteredTasks"
        :key="task.id"
        @click="selectTask(task)"
        class="mt-5 grid cursor-pointer gap-1.5 rounded-lg pl-4 duration-300 ease-in-out hover:scale-105"
      >
        <div class="flex items-center space-x-2 text-primary">
          <Checkbox v-model="task.completed" />

          <label
            class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {{ truncateText(task.title) }}
          </label>
        </div>

        <p class="pl-6 text-xs text-primary opacity-60">
          {{ truncateText(task.description) }}
        </p>
      </div>
    </div>
  </div>
</template>
