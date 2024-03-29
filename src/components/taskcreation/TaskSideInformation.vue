<script setup lang="ts">
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-vue-next";

import { ref, watch } from "vue";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const date = ref<Date>();
const position = ref("Personal");

const emit = defineEmits(["update-category", "set-date"]);

watch(position, (newValue) => {
  // Emitting the update-category event with the new value
  emit("update-category", newValue);
});

watch(date, (newValue) => {
  // Emitting the update-category event with the new value
  emit("set-date", newValue);
});
</script>

<template>
  <div class="flex justify-between">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          class="border-none bg-accent"
          size="xs"
          :variant="'outline'"
          :class="
            cn(
              'w-fit justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )
          "
        >
          <CalendarIcon class="mr-2 h-4 w-4 text-white" />
          <span class="text-white">{{
            date ? format(date, "PPP") : "Pick a date"
          }}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar v-model="date" />
      </PopoverContent>
    </Popover>

    <div class="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="xs"
            class="justify-between gap-4 border-none bg-accent text-white"
            variant="outline"
          >
            {{ position }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
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
            <DropdownMenuRadioItem v-model="position" value="Studies">
              Studies
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem v-model="position" value="Work">
              Work
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem v-model="position" value="Personal">
              Personal
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button class="border-none bg-accent text-white" size="xs">Edit</Button>
    </div>
  </div>
</template>
