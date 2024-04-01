// src/stores/prioStore.ts
import { defineStore } from "pinia";
import { getPrio, createPrio, deletePrio } from "@/lib/api/prio";

export const usePrioStore = defineStore("prio", {
  state: () => ({
    prios: [],
    selectedPrio: null,
  }),
  actions: {
    async fetchPrios() {
      this.prios = await getPrio();
    },
    async addPrio(name) {
      const newPrio = await createPrio(name);
      this.prios.push(newPrio);
    },
    async deletePrio(prioId) {
      try {
        await deletePrio(prioId);
        this.prios = this.prios.filter((prio) => prio.id !== prioId);
      } catch (error) {
        console.error("Failed to delete prio:", error);
      }
    },

    selectPrio(prio) {
      this.selectedPrio = prio;
    },
    clearSelectedPrio() {
      this.selectedPrio = null;
    },
  },
});
