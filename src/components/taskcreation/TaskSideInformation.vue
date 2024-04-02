<script setup lang="ts">
import { useTaskStore } from "@/stores/taskStore";
import { usePrioStore } from "@/stores/prioStore";
import { useCategoryStore } from "@/stores/categoryStore";
import { ref, onMounted, watch } from "vue";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

import { h } from "vue";
import { useToast } from "@/components/ui/toast/use-toast";
import { ToastAction } from "@/components/ui/toast";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const emit = defineEmits(["update-category", "update-date", "update-prio"]);

const props = defineProps({
  category: String,
  prio: String,
});

const date = ref<Date>();
const prioPosition = ref("Priority");
const categoryPosition = ref("Category");

const { toast } = useToast();
const taskStore = useTaskStore();
const prioStore = usePrioStore();
const categoryStore = useCategoryStore();

const newCategoryName = ref(""); // For the new category name input

const createCategory = async () => {
  const trimmedName = newCategoryName.value.trim();

  // Check for empty input
  if (!trimmedName) {
    toast({
      title: "Creation Error",
      description: "Category name cannot be empty.",
      duration: 4000,
      variant: "destructive",
    });
    return;
  }

  // Check for length constraint
  if (trimmedName.length > 18) {
    toast({
      title: "Category Creation Failed",
      description: "Category name cannot exceed 18 characters.",
      duration: 4000,
      variant: "destructive",
    });
    return;
  }

  // Check for duplicate category name
  const isDuplicate = categoryStore.categories.some(
    (category) => category.name.toLowerCase() === trimmedName.toLowerCase(),
  );
  if (isDuplicate) {
    toast({
      title: "Duplicate Category",
      description: "A category with this name already exists.",
      duration: 4000,
      variant: "destructive",
    });
    return;
  }

  // If all checks pass, add the category
  await categoryStore.addCategory(trimmedName);
  newCategoryName.value = ""; // Reset input after adding
  categoryStore.fetchCategories(); // Refresh categories list
  toast({
    title: "Category Added",
    description: `Category "${trimmedName}" has been successfully added.`,
    duration: 4000,
  });
};
const deleteCategoryAction = async (categoryId: string) => {
  await categoryStore.deleteCategory(categoryId);
  categoryStore.fetchCategories(); // Refresh categories list
};

watch(
  categoryPosition,
  (newValue) => {
    if (newValue) {
      emit("update-category", newValue);
    }
  },
  { immediate: true },
);

watch(
  prioPosition,
  (newValue) => {
    if (newValue) {
      emit("update-prio", newValue);
    }
  },
  { immediate: true },
);

watch(
  date,
  (newValue) => {
    if (newValue) {
      emit("update-date", newValue);
    }
  },
  { immediate: true },
);

watch(
  () => props.category,
  (newVal) => {
    categoryPosition.value = newVal || "Category";
  },
  { immediate: true },
);

watch(
  () => props.prio,
  (newVal) => {
    prioPosition.value = newVal || "Priority";
  },
  { immediate: true },
);

taskStore.$subscribe((mutation, state) => {
  if (state.selectedTask !== null && state.selectedTask !== undefined) {
    date.value = new Date(state.selectedTask.due_date);
  } else {
    date.value = null;
  }
});

// Lifecycle
onMounted(() => {
  categoryStore.fetchCategories(); // Load categories on component mount
  prioStore.fetchPrios();
});
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-2">
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

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="xs"
            class="w-fitjustify-between border-none bg-accent text-white"
            variant="outline"
          >
            {{
              prioPosition === "Priority" || prioStore.prios.length === 0
                ? "Priority"
                : prioStore.prios.find((c) => c.id === prioPosition)?.name
            }}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-46">
          <DropdownMenuRadioGroup v-model="prioPosition">
            <DropdownMenuRadioItem
              v-for="prio in prioStore.prios"
              :key="prio.id"
              :value="prio.id"
            >
              {{ prio.name }}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              v-if="prioStore.prios.length === 0"
              value="Priorities"
            >
              No priorities found
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <div class="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button
            size="xs"
            class="w-fitjustify-between border-none bg-accent text-white"
            variant="outline"
          >
            {{
              categoryPosition === "Category" ||
              categoryStore.categories.length === 0
                ? "Category"
                : categoryStore.categories.find(
                    (c) => c.id === categoryPosition,
                  )?.name
            }}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-46">
          <DropdownMenuRadioGroup v-model="categoryPosition">
            <DropdownMenuRadioItem
              v-for="category in categoryStore.categories"
              :key="category.id"
              :value="category.id"
            >
              {{ category.name }}
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem
              v-if="categoryStore.categories.length === 0"
              value="Categories"
            >
              No categories found
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog>
        <DialogTrigger as-child>
          <Button class="border-none bg-accent text-white" size="xs"
            >Edit</Button
          >
        </DialogTrigger>

        <DialogContent class="sm:max-w-[375px]">
          <DialogHeader>
            <DialogTitle>Edit Categories</DialogTitle>
            <DialogDescription>
              Here you can add or delete categories!
            </DialogDescription>
          </DialogHeader>

          <div class="flex flex-col gap-3 py-2 text-white">
            <div
              v-for="category in categoryStore.categories"
              :key="category.id"
              class="flex items-center justify-between rounded-md bg-secondary px-3 py-1.5 duration-300 ease-in-out hover:scale-105"
            >
              <p class="justify-between break-all">{{ category.name }}</p>

              <Button
                size="sm"
                class="border-none bg-accent text-white"
                @click="deleteCategoryAction(category.id)"
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
            </div>
          </div>

          <div class="flex items-center gap-3">
            <Button
              @click="createCategory"
              size="md"
              class="border-none bg-accent text-white"
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
                class="lucide lucide-list-plus"
              >
                <path d="M11 12H3" />
                <path d="M16 6H3" />
                <path d="M16 18H3" />
                <path d="M18 9v6" />
                <path d="M21 12h-6" /></svg
            ></Button>
            <Input
              v-model="newCategoryName"
              class="w-full border-accent bg-transparent text-white caret-accent"
              placeholder="Add a category..."
            />
          </div>

          <DialogFooter>
            <Button type="submit" class="w-full" @click="createCategory"
              >Create</Button
            >
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
