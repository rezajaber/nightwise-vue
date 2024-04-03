<script setup lang="ts">
import TaskSearch from "./taskoverview/TaskSearch.vue";
import TaskList from "./taskoverview/TaskList.vue";

import { useTaskStore } from "@/stores/taskStore";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
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

const searchQuery = ref("");

function updateSearchQuery(newQuery) {
  searchQuery.value = newQuery;
}

const taskStore = useTaskStore();

function clearSelectedTask() {
  taskStore.clearSelectedTask();
}
</script>

<template>
  <div class="grid gap-4 md:py-0">
    <div
      class="relative rounded-xl bg-gradient-to-b from-border to-card p-px px-4 py-5 shadow-lg transition-all"
    >
      <TaskSearch @update:searchQuery="updateSearchQuery" class="mb-8" />
      <TaskList :searchQuery="searchQuery" />
    </div>

    <Dialog>
      <DialogTrigger as-child>
        <Button class="gap-1 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" /></svg
          >Add a Task</Button
        >
      </DialogTrigger>
      <DialogContent class="max-w-xs rounded-md">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription class="text-white opacity-60">
            Are you sure you want to create a new task?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter class="sm:justify-start">
          <DialogClose as-child class="">
            <Button
              type="button"
              class="w-full"
              size="sm"
              @click="clearSelectedTask()"
            >
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
