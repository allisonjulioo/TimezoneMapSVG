import { defineStore } from "pinia";

export const useTimezone = defineStore({
  id: "timezone",
  state: () => {
    return {
      ofsetTimezone: 0,
    };
  },
  getters: {
    dataOfsetTimezone: (state) => state.ofsetTimezone,
  },
  actions: {
    setOfsetTimezone(ofsetTimezone: number) {
      this.ofsetTimezone = ofsetTimezone;
    },
  },
});
