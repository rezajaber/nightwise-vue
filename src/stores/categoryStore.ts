// src/stores/categoryStore.ts
import { defineStore } from "pinia";
import {
  getCategory,
  createCategory,
  deleteCategory,
} from "@/lib/api/category";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
    selectedCategory: null,
  }),
  actions: {
    async fetchCategories() {
      this.categories = await getCategory();
    },
    async addCategory(name) {
      const newCategory = await createCategory(name);
      this.categories.push(newCategory);
    },
    async deleteCategory(categoryId) {
      try {
        await deleteCategory(categoryId);
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId,
        );
      } catch (error) {
        console.error("Failed to delete category:", error);
      }
    },

    selectCategory(category) {
      this.selectedCategory = category;
    },
    clearSelectedCategory() {
      this.selectedCategory = null;
    },
  },
});
