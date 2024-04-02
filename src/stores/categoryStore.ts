// src/stores/categoryStore.ts
import { defineStore } from "pinia";
import {
  getCategory,
  createCategory,
  deleteCategory,
} from "@/lib/api/category";

// Assuming a type for your categories; adjust as needed
interface Category {
  id: string;
  name: string;
  // Add other properties as needed
}

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [] as Category[],
    selectedCategory: null as Category | null,
  }),
  actions: {
    async fetchCategories() {
      this.categories = await getCategory();
    },
    async addCategory(name: string) {
      const newCategory: Category = await createCategory(name);
      this.categories.push(newCategory);
    },
    async removeCategory(categoryId: string) {
      try {
        await deleteCategory(categoryId);
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId,
        );
      } catch (error) {
        console.error("Failed to delete category:", error);
      }
    },
    selectCategory(category: Category) {
      this.selectedCategory = category;
    },
    clearSelectedCategory() {
      this.selectedCategory = null;
    },
  },
});
