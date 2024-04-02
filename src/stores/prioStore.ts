// src/stores/prioStore.ts
import { defineStore } from "pinia";
import { getPrio, createPrio, deletePrio } from "@/lib/api/prio";

// Assuming a type for your priorities; adjust as needed
interface Prio {
  id: string;
  name: string;
  // Add other properties as needed
}

export const usePrioStore = defineStore("prio", {
  state: () => ({
    prios: [] as Prio[],
    selectedPrio: null as Prio | null,
  }),
  actions: {
    async fetchPrios() {
      this.prios = await getPrio();
    },
    async addPrio(name: string) {
      const newPrio: Prio = await createPrio(name);
      this.prios.push(newPrio);
    },
    async removePrio(prioId: string) {
      try {
        await deletePrio(prioId);
        this.prios = this.prios.filter((prio) => prio.id !== prioId);
      } catch (error) {
        console.error("Failed to delete prio:", error);
      }
    },
    selectPrio(prio: Prio) {
      this.selectedPrio = prio;
    },
    clearSelectedPrio() {
      this.selectedPrio = null;
    },
  },
});
