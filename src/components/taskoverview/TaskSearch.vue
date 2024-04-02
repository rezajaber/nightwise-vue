<script setup lang="ts">
import { ref, watch } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTaskStore } from "@/stores/taskStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const props = defineProps();

const emit = defineEmits(["update:searchQuery"]);

const priorities = [
  { id: "", name: "All" },
  { id: "dbj5yur26rch27u", name: "Low" },
  { id: "laa3ohx04zyu8sa", name: "Normal" },
  { id: "on8c05q8tbq1jyp", name: "High" },
  { id: "s915i7fhvcw4dxd", name: "Critical" },
];

const prioPosition = ref("Priorities");
const selectedPriority = ref(null);
const searchQuery = ref("");

watch(searchQuery, (newValue) => {
  emit("update:searchQuery", newValue);
});

const taskStore = useTaskStore();

function clearSelectedTask() {
  taskStore.clearSelectedTask();
}

function updateSelectedPriority(priorityId) {
  // Find the priority object by ID
  const priority = priorities.find((p) => p.id === priorityId);
  if (priority) {
    selectedPriority.value = priority;
    taskStore.selectPriority(priority.id); // Store the ID in the taskStore
    prioPosition.value = priority.name; // Update the displayed name
  }
}
</script>

<template>
  <div class="grid min-w-72 gap-2">
    <div class="flex gap-2.5">
      <Input
        v-model="searchQuery"
        placeholder="Search Task..."
        class="h-8 w-full border border-accent text-primary caret-accent"
      />
      <Dialog>
        <DialogTrigger as-child>
          <Button size="sm" class="hidden border-none bg-accent px-2.5 md:block"
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
              class="lucide lucide-circle-plus"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-xs">
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

    <div class="flex gap-2.5 text-white">
      <Button
        size="sm"
        class="w-2/5 border-none bg-accent text-white"
        @click="taskStore.toggleShowDoneTasks"
        >{{ taskStore.showDoneTasks ? "Hide Done" : "Show Done" }}</Button
      >

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="sm"
            class="w-3/5 justify-between border-none bg-accent px-4"
            variant="outline"
          >
            {{ prioPosition }}
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
        <DropdownMenuContent class="w-44">
          <DropdownMenuRadioGroup
            v-model="prioPosition"
            @update:modelValue="updateSelectedPriority"
          >
            <DropdownMenuRadioItem value=""> All </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dbj5yur26rch27u">
              Low
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="laa3ohx04zyu8sa">
              Normal
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="on8c05q8tbq1jyp">
              High
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="s915i7fhvcw4dxd">
              Critical
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>
