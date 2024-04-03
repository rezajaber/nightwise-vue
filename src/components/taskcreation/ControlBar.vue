<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import { Button } from "@/components/ui/button";
import { showToast } from "@/lib/utils/toastUtils";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

defineProps();

const emit = defineEmits([
  "create-new-task",
  "create-task",
  "update-task",
  "delete-task",
  "done-task",
]);

const handleCreateOrUpdateClick = () => {
  emit("create-new-task");
};

const handleDoneClick = () => {
  if (!taskStore.selectedTask) {
    showToast(
      "No Task Selected",
      "Please select a task to mark as done.",
      "destructive",
    );
    return;
  }
  emit("done-task", taskStore.selectedTask.id);
  // Success notification

  showToast(
    "Task Completed",
    "The task has been successfully marked as done.",
    "default",
  );
};

const handleDeleteClick = () => {
  if (!taskStore.selectedTask) {
    showToast(
      "No Task Selected",
      "Please select a task to delete.",
      "destructive",
    );
    return;
  }
  emit("delete-task");
  // Success notification

  showToast(
    "Task Deleted",
    "The task has been successfully deleted.",
    "default",
  );
};

const taskStore = useTaskStore();

const buttonLabel = computed(() =>
  taskStore.selectedTask ? "Update" : "Create",
);
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-2">
      <Button
        size="xs"
        class="border-none bg-accent text-white"
        @click="handleCreateOrUpdateClick"
        >{{ buttonLabel }}</Button
      >

      <Dialog>
        <DialogTrigger as-child>
          <Button size="xs" class="border-none bg-accent text-white"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-list-checks"
            >
              <path d="m3 17 2 2 4-4" />
              <path d="m3 7 2 2 4-4" />
              <path d="M13 6h8" />
              <path d="M13 12h8" />
              <path d="M13 18h8" /></svg
          ></Button>
        </DialogTrigger>
        <DialogContent class="max-w-xs rounded-md">
          <DialogHeader>
            <DialogTitle>Finish Task</DialogTitle>
            <DialogDescription class="text-white opacity-60">
              Is this task finished and can be moved to the done section?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter class="sm:justify-start">
            <DialogClose as-child class="">
              <Button
                type="button"
                class="w-full"
                size="sm"
                @click="handleDoneClick"
                >Done</Button
              >
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger as-child>
          <Button size="xs" class="border-none bg-accent text-white"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash-2"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" /></svg
          ></Button>
        </DialogTrigger>
        <DialogContent class="max-w-xs rounded-md">
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
            <DialogDescription class="text-white opacity-60">
              Are you sure you want to delete the task?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter class="sm:justify-start">
            <DialogClose as-child class="">
              <Button
                type="button"
                class="w-full"
                size="sm"
                @click="handleDeleteClick"
                >Delete</Button
              >
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div class="flex items-center gap-2">
      <Button
        size="xs"
        class="gap-1.5 border-none bg-accent tracking-wide text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-info"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" /></svg
      ></Button>
    </div>
  </div>
</template>
