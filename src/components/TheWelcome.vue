<script setup lang="ts">
import { ref } from "vue";

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
</script>

<template>
  <div class="grid w-fit gap-2">
    <div class="flex gap-2.5">
      <Input />
      <Button size="sm" class="px-2.5"
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
          class="lucide lucide-circle-plus"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" /></svg
      ></Button>
    </div>

    <div class="flex gap-2.5">
      <Button size="sm">Show done</Button>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button size="sm" variant="outline"> {{ position }} </Button>
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
