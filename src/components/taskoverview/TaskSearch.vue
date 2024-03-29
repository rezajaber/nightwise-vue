<script setup lang="ts">
import { ref } from "vue";
import { createTask as createTaskApi } from "@/lib/api/task"; // Assuming this is the API call
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const position = ref("This Week");

const taskTitle = ref("");
const taskDescription = ref("");
const category = ref("");
let due_date = ref(new Date());

const createTask = async () => {
  if (taskTitle.value.trim()) {
    await createTaskApi(
      taskTitle.value,
      taskDescription.value,
      category.value,
      due_date.value,
    );
    taskTitle.value = "";
    taskDescription.value = "";
    // Reset input after creation
    // Optionally, emit an event to notify parent components to refresh the task list
  }
  window.location.reload();
};

const handleEnter = () => {
  createTask(); // Call the existing createTask function
};
</script>

<template>
  <div class="grid min-w-72 gap-2">
    <div class="flex gap-2.5">
      <Input
        placeholder="Search Task..."
        class="h-8 w-full border border-accent text-primary caret-accent"
      />
      <Button
        size="sm"
        class="hidden border-none bg-accent px-2.5 md:block"
        @click="createTask"
        ><svg
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
          <path d="M12 8v8" />
        </svg>
      </Button>
    </div>

    <div class="flex gap-2.5 text-white">
      <Button size="sm" class="w-2/5 border-none bg-accent text-white"
        >Show done</Button
      >

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="sm"
            class="w-3/5 justify-between border-none bg-accent px-4"
            variant="outline"
          >
            {{ position }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-down"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="Today"> Today </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="This Week">
              This Week
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Next 30 Days">
              Next 30 Days
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="All Tasks">
              All Tasks
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
