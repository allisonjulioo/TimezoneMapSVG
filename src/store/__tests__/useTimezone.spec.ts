import { useTimezone } from "../useTimezone";

describe("Timezone Store", () => {
  it("should correct set timezone offset store", () => {
    const timerStore = useTimezone();

    expect(timerStore.ofsetTimezone).toBe(0);

    timerStore.setOfsetTimezone(2);

    expect(timerStore.ofsetTimezone).toBe(2);
  });
});
