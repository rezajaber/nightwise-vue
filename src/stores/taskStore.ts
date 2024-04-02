// src/stores/taskStore.ts
import { defineStore } from "pinia";
import { createTask, getTasks, updateTask, deleteTask } from "@/lib/api/task";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    doneTasks: [], // Array to store done tasks
    showDoneTasks: false, // Flag to toggle done tasks visibility
    selectedTask: null,
    selectedPriority: null, // Add this line
  }),
  actions: {
    async fetchTasks() {
      try {
        this.tasks = await getTasks();
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    },

    async addTask(title, description, category_id, prio_id, due_date) {
      try {
        const newTask = await createTask(
          title,
          description,
          category_id,
          prio_id,
          due_date,
        );
        this.tasks.push(newTask);
      } catch (error) {
        console.error("Failed to add task:", error);
      }
    },

    async updateTask(
      taskId,
      title,
      description,
      category_id,
      prio_id,
      due_date,
    ) {
      try {
        const updatedTask = await updateTask(
          taskId,
          title,
          description,
          category_id,
          prio_id,
          due_date,
        );
        const index = this.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          this.tasks[index] = updatedTask;
        }
      } catch (error) {
        console.error("Failed to update task:", error);
      }
    },

    async deleteTask(taskId) {
      try {
        await deleteTask(taskId);
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      } catch (error) {
        console.error("Failed to delete task:", error);
      }
    },

    selectTask(task) {
      this.selectedTask = task;
    },
    clearSelectedTask() {
      this.selectedTask = null;
    },
    selectPriority(priorityId) {
      this.selectedPriority = priorityId;
    },

    markTaskAsDone(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const [doneTask] = this.tasks.splice(taskIndex, 1);
        this.doneTasks.push(doneTask);
      }
    },

    toggleShowDoneTasks() {
      this.showDoneTasks = !this.showDoneTasks;
    },
    getVisibleTasks() {
      return this.showDoneTasks ? this.doneTasks : this.tasks;
    },
  },
});
