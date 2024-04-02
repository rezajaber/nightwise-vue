TaskCreation.vue:
<script setup lang="ts">
import ControlBar from "./taskcreation/ControlBar.vue";
import TaskSideInformation from "./taskcreation/TaskSideInformation.vue";
import { useToast } from "@/components/ui/toast/use-toast";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { ref, watch } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const title = ref("");
const description = ref("");
const category_id = ref("");
const prio_id = ref("");
const due_date = ref("");

const { toast } = useToast();
const taskStore = useTaskStore();

const handleSubmit = async () => {
  // Check if the title is empty
  if (title.value.trim() === "") {
    // Display a toast message indicating the title cannot be empty
    toast({
      title: "Missing Title",
      description: "Please provide a title for the task.",
      duration: 4000,
      variant: "destructive", // Use a warning variant or any other variant you prefer
    });
    return; // Return early to prevent further execution
  }

  if (taskStore.selectedTask) {
    await taskStore.updateTask(
      taskStore.selectedTask.id,
      title.value,
      description.value,
      category_id.value,
      prio_id.value,
      due_date.value,
    );
    taskStore.clearSelectedTask();
  } else {
    await taskStore.addTask(
      title.value,
      description.value,
      category_id.value,
      prio_id.value,
      due_date.value,
    );
    // Reset fields after successful task creation
    title.value = "";
    description.value = "";
    category_id.value = "";
    prio_id.value = "";
    due_date.value = "";
  }

  // Success toast message can be triggered here if needed
  toast({
    title: `Task ${taskStore.selectedTask ? "Updated" : "Created"}`,
    description: `The task has been successfully ${taskStore.selectedTask ? "updated" : "created"}.`,
    duration: 4000,
  });
};

const handleDelete = async () => {
  if (taskStore.selectedTask) {
    await taskStore.deleteTask(taskStore.selectedTask.id);
    taskStore.clearSelectedTask(); // Clear selected task if needed
  }
};

watch(
  () => taskStore.selectedTask,
  (newTask, oldTask) => {
    console.log("Selected task changed:", newTask);
    if (newTask) {
      title.value = newTask.title;
      description.value = newTask.description;
      category_id.value = newTask.category_id;
      prio_id.value = newTask.prio_id;
    } else {
      title.value = "";
      description.value = "";
      category_id.value = "";
      prio_id.value = "";
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
      @done-task="taskStore.markTaskAsDone"
    />

    <Input
      v-model="title"
      @keyup.enter="handleSubmit"
      placeholder="Do this"
      class="font-regular mt-7 w-full border-0 bg-secondary px-0 pl-4 text-3xl text-primary caret-accent focus-visible:outline-none focus-visible:ring-0"
    />

    <TaskSideInformation
      @updateCategory="category_id = $event"
      @updatePrio="prio_id = $event"
      @updateDate="due_date = $event"
      :category="category_id"
      :prio="prio_id"
      class="mt-7"
    />

    <Textarea
      v-model="description"
      @keyup.enter="handleSubmit"
      placeholder="Some more context"
      class="mt-7 bg-secondary pl-4 text-primary caret-accent"
    />
  </div>
</template>
