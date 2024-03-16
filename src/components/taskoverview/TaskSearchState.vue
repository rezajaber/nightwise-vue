<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const position = ref("This Week");
</script>

<template>
  <div class="flex gap-2.5">
    <Button size="sm" class="w-2/5">Show done</Button>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button size="sm" class="w-3/5 justify-between px-4" variant="outline">
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
</template>
