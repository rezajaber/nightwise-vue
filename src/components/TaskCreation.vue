<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";
import Editor from "./taskcreation/TipTap.vue";

import { Input } from "@/components/ui/input";

import { ref, watch } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import { showToast } from "@/lib/utils/toastUtils";

const title = ref("");
const description = ref("");
const category_id = ref("");
const prio_id = ref("");
const due_date = ref("");
const task_done = ref(false);

const taskStore = useTaskStore();

const resetTaskForm = () => {
  title.value = "";
  description.value = "";
  category_id.value = "";
  prio_id.value = "";
  due_date.value = "";
  task_done.value = false;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  if (taskStore.selectedTask) {
    await taskStore.updateTask(
      taskStore.selectedTask.id,
      title.value,
      description.value,
      category_id.value,
      prio_id.value,
      new Date(due_date.value),
      task_done.value,
    );
  } else {
    await taskStore.addTask(
      title.value,
      description.value,
      category_id.value,
      prio_id.value,
      new Date(due_date.value),
      task_done.value,
    );
    resetTaskForm();
  }

  showToast(
    `Task ${taskStore.selectedTask ? "Updated" : "Created"}`,
    `The task has been successfully ${taskStore.selectedTask ? "updated" : "created"}.`,
    "default",
  );
};

const validateForm = () => {
  if (title.value.trim() === "") {
    showToast(
      "Missing Title",
      "Please provide a title for the task.",
      "destructive",
    );
    return false;
  }
  if (description.value.trim() === "") {
    showToast(
      "Missing Description",
      "Please provide a description for the task.",
      "destructive",
    );
    return false;
  }
  if (!due_date.value) {
    showToast(
      "Missing Due Date",
      "Please provide a due date for the task.",
      "destructive",
    );
    return false;
  }
  if (prio_id.value.trim() === "Priority") {
    showToast(
      "Missing Priority",
      "Please select a priority for the task.",
      "destructive",
    );
    return false;
  }
  if (category_id.value.trim() === "Category") {
    showToast(
      "Missing Category",
      "Please select a category for the task.",
      "destructive",
    );
    return false;
  }
  return true;
};

const handleDelete = async () => {
  if (!taskStore.selectedTask) return;
  await taskStore.deleteTask(taskStore.selectedTask.id);
  taskStore.clearSelectedTask();
};

const handleMarkAsDone = async (taskId) => {
  await taskStore.markTaskAsDone(taskId);
  taskStore.clearSelectedTask();
  showToast(
    "Task Marked as Done",
    "The task has been successfully marked as done and the form has been reset.",
    "default",
  );
};

watch(
  () => taskStore.selectedTask,
  (newTask) => {
    if (newTask) {
      title.value = newTask.title;
      description.value = newTask.description;
      category_id.value = newTask.category_id;
      prio_id.value = newTask.prio_id;
      due_date.value = newTask.due_date || "";
      task_done.value = newTask.task_done;
    } else {
      resetTaskForm();
    }
  },
  { deep: true },
);
</script>

<template>
  <div
    class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
  >
    <ControlBar
      @create-new-task="handleSubmit"
      @delete-task="handleDelete"
      @done-task="handleMarkAsDone"
    />
    <Input
      v-model="title"
      @keyup.enter="handleSubmit"
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 bg-secondary px-4 text-3xl text-primary caret-accent focus-visible:outline-none focus-visible:ring-0"
    />
    <TaskSideInformation
      @updateCategory="category_id = $event"
      @updatePrio="prio_id = $event"
      @updateDate="due_date = $event"
      :category="category_id"
      :prio="prio_id"
      class="mt-7"
    />
    <Editor v-model="description" />
  </div>
</template>
