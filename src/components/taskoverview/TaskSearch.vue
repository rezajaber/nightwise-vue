<script setup lang="ts">
import { ref, onMounted } from "vue";

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

import { createTask, getTasks } from "@/lib/api/task";

/* let tasks = ref(undefined);

onMounted(async () => {
  const newTask = await createTask("Hallo Welt");
  console.log(newTask);
  tasks = (await getTasks()).items;
  console.log(tasks);
}); */

const tasks = ref([]);

// Function to be called when the button is clicked
const handleCreateTask = async () => {
  const newTask = await createTask("New Task Title");
  console.log(newTask);
  // Optionally, refresh the tasks list
  tasks.value = (await getTasks()).items;
};
</script>

<template>
  <div class="grid min-w-72 gap-2">
    <div class="flex gap-2.5">
      <Input class="h-7 w-full" />
      <Button size="xs" class="px-2.5" @click="handleCreateTask"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </Button>
    </div>

    <div class="flex gap-2.5">
      <Button size="sm" class="w-2/5">Show done</Button>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="sm"
            class="w-3/5 justify-between px-4"
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
