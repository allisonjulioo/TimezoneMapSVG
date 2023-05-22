import { createPinia, setActivePinia } from "pinia";
import { useTimezone } from "../useTimezone";

describe("Timezone Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should correct set timezone offset store", () => {
    const timerStore = useTimezone();

    expect(timerStore.ofsetTimezone).toBe(0);

    timerStore.setOfsetTimezone(2);

    expect(timerStore.ofsetTimezone).toBe(2);
  });
});
