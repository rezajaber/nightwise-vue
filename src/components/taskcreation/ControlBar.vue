<script setup lang="ts">
import { computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import { Button } from "@/components/ui/button";
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
]);

const createNewTask = () => {
  emit("create-new-task");
};
const createTask = () => {
  emit("create-task");
};
const updateTask = () => {
  emit("update-task");
};
const deleteTask = () => {
  emit("delete-task");
};

const handleCreateOrUpdateClick = () => {
  emit("create-new-task");
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
        <DialogContent class="sm:max-w-xs">
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
            <DialogDescription class="text-white opacity-60">
              Are you sure you want to delete the task?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter class="sm:justify-start">
            <DialogClose as-child class="">
              <Button type="button" class="w-full" size="sm">Delete</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>

    <div class="flex items-center gap-2">
      <Button size="xs" class="border-none bg-accent"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-up-left"
        >
          <path d="M5 11V5H11" />
          <path d="M5 5L19 19" /></svg
      ></Button>

      <Button size="xs" class="border-none bg-accent"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-down"
        >
          <path d="M8 18L12 22L16 18" />
          <path d="M12 2V22" /></svg
      ></Button>

      <Button size="xs" class="border-none bg-accent text-white"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-down-right"
        >
          <path d="M19 13V19H13" />
          <path d="M5 5L19 19" /></svg
      ></Button>
    </div>
  </div>
</template>
