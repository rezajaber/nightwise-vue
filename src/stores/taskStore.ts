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
        const fetchedTasks = await getTasks();
        // Clear the current tasks and doneTasks arrays
        this.tasks = [];
        this.doneTasks = [];
        // Iterate over fetched tasks and categorize them based on `task_done` status
        fetchedTasks.forEach((task) => {
          if (task.task_done) {
            this.doneTasks.push(task);
          } else {
            this.tasks.push(task);
          }
        });
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    },

    async addTask(
      title,
      description,
      category_id,
      prio_id,
      due_date,
      task_done,
    ) {
      try {
        const newTask = await createTask(
          title,
          description,
          category_id,
          prio_id,
          due_date,
          task_done,
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
      task_done,
    ) {
      try {
        const updatedTask = await updateTask(
          taskId,
          title,
          description,
          category_id,
          prio_id,
          due_date,
          task_done,
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

    // In taskStore.ts
    markTaskAsDone(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        // First, update the task's `task_done` status in the database
        const task = this.tasks[taskIndex];
        this.updateTask(
          task.id,
          task.title,
          task.description,
          task.category_id,
          task.prio_id,
          new Date(task.due_date),
          true,
        )
          .then(() => {
            // Once the task is updated, move it to the doneTasks array
            const [doneTask] = this.tasks.splice(taskIndex, 1);
            this.doneTasks.push(doneTask);
          })
          .catch((error) =>
            console.error("Failed to mark task as done:", error),
          );
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
