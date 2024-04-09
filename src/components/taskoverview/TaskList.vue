<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
  let tasks = taskStore.getVisibleTasks();

  if (props.searchQuery) {
    tasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(props.searchQuery.toLowerCase()),
    );
  }

  if (taskStore.selectedPriority) {
    tasks = tasks.filter((task) => task.prio_id === taskStore.selectedPriority);
  }

  return tasks;
});

function unmarkTaskAsDone(taskId) {
  taskStore.unmarkTaskAsDone(taskId);
}

const prettierDescription = (desc) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(desc, "text/html");
  return doc.body.textContent || "";
};
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
        class="px-2.5"
      >
        <div
          class="mt-5 flex cursor-pointer items-center justify-between rounded-lg duration-300 ease-in-out hover:scale-105 hover:bg-secondary hover:px-2 hover:py-2"
        >
          <div class="grid gap-1.5">
            <div class="flex items-center space-x-2 text-primary">
              <Checkbox v-model="task.completed" />
              <label
                class="break-all text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {{ truncateText(task.title, 28) }}
              </label>
              <!-- Priority icon based on task's priority -->
            </div>
            <p
              class="break-all pl-6 text-justify text-xs text-primary opacity-60"
            >
              {{ prettierDescription(truncateText(task.description)) }}
            </p>
          </div>

          <div class="flex gap-1.5">
            <span v-if="isOverdue(task.due_date)" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b91c1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-calendar-clock"
              >
                <path
                  d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
                />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h5" />
                <path d="M17.5 17.5 16 16.3V14" />
                <circle cx="16" cy="16" r="6" />
              </svg>
            </span>

            <!-- Conditionally render the SVG icon if the task is overdue -->
            <span class="flex items-center gap-2">
              <svg
                v-if="task.prio_id === 'dbj5yur26rch27u'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#379a6c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-check"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <svg
                v-if="task.prio_id === 'laa3ohx04zyu8sa'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d5c453"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-half"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="M12 22V2" />
              </svg>
              <svg
                v-if="task.prio_id === 'on8c05q8tbq1jyp'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <svg
                v-if="task.prio_id === 's915i7fhvcw4dxd'"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff0000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-x"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                />
                <path d="m14.5 9.5-5 5" />
                <path d="m9.5 9.5 5 5" />
              </svg>

              <Button
                size="xs"
                class="cursor-pointer px-1.5"
                v-if="task.task_done"
                @click.stop="unmarkTaskAsDone(task.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path
                    d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"
                  />
                </svg>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
