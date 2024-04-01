<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

import { onMounted, ref, computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";

function truncateText(text: string, limit: number = 35) {
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
      <!-- Conditional text for Overdue/Ontime/Tasks -->
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
        <!-- This now shows "Tasks" by default or "Overdue"/"Ontime" based on the selected task -->
        {{
          taskStore.selectedTask
            ? isOverdue(taskStore.selectedTask.due_date)
              ? "Overdue"
              : "Ontime"
            : "Tasks"
        }}
      </p>
      <!-- Adjusted task count display -->
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
        <!-- Show the number of selected tasks or total tasks -->
        {{ taskStore.selectedTask ? "1" : filteredTasks.length }}
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
      >
        <div
          class="mt-5 flex cursor-pointer justify-between rounded-lg pl-2 duration-300 ease-in-out hover:scale-105"
        >
          <div class="grid gap-1.5">
            <div class="flex items-center space-x-2 text-primary">
              <Checkbox v-model="task.completed" />

              <label
                class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {{ truncateText(task.title, 28) }}
              </label>
            </div>

            <p
              class="break-all pl-6 text-justify text-xs text-primary opacity-60"
            >
              {{ truncateText(task.description) }}
            </p>
          </div>
          <!-- Conditionally render the SVG icon if the task is overdue -->
          <span v-if="isOverdue(task.due_date)" class="pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b91c1c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield-alert"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
