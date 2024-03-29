<script setup lang="ts">
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { ref, watch, onMounted } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  getCategory,
  createCategory,
  deleteCategory,
} from "@/lib/api/category"; // Assuming this is the API call
import { Label } from "@/components/ui/label";
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
import { Input } from "@/components/ui/input";

const date = ref<Date>();
const position = ref("Personal");
const categoryName = ref("");

const emit = defineEmits([
  "update-category",
  "set-date",
  "category-fetched",
  "get-categories",
  "category-deleted",
  "category-created",
]);

watch(position, (newValue) => {
  // Emitting the update-category event with the new value
  emit("update-category", newValue);
});

watch(date, (newValue) => {
  // Emitting the update-category event with the new value
  emit("set-date", newValue);
});

const categories = ref([]);

onMounted(async () => {
  categories.value = await getCategory();
});

const handleCreateCategory = async () => {
  if (categoryName.value.trim()) {
    try {
      await createCategory(categoryName.value);
      emit("category-created"); // Optionally emit an event
      categoryName.value = ""; // Reset the input field
      categories.value = await getCategory(); // Refresh the categories list
    } catch (error) {
      console.error("Error creating category:", error);
    }
  }
};

const handleDeleteCategory = async (categoryId: string) => {
  try {
    await deleteCategory(categoryId);
    categories.value = categories.value.filter(
      (category) => category.id !== categoryId,
    );
    // Optionally, emit an event to notify the parent component of the change
    emit("category-deleted", categoryId);
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};
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
              class="flex items-center justify-between rounded-md bg-secondary px-3 py-1.5 duration-300 ease-in-out hover:scale-105"
              v-for="category in categories"
              :key="category.id"
            >
              <p class="b justify-between rounded-md">
                {{ category.name }}
              </p>

              <Button
                size="sm"
                class="border-none bg-accent text-white"
                @click="handleDeleteCategory(category.id)"
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
            <Button size="md" class="border-none bg-accent text-white"
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
              v-model="categoryName"
              class="w-full border-accent bg-transparent text-white caret-accent"
              placeholder="Add a category..."
            />
          </div>

          <DialogFooter>
            <Button type="submit" class="w-full" @click="handleCreateCategory"
              >Create</Button
            >
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
