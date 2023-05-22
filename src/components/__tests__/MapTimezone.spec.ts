import { fireEvent, render } from "@testing-library/vue";
import { createPinia, setActivePinia } from "pinia";
import { useTimezone } from "../../store/useTimezone";
import MapTimezone from "../MapTimezone.vue";

describe("Component MapTimezone", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should store "onOverCountry" event when country is hovered', async () => {
    const { findByTitle } = render(MapTimezone);

    const timerStore = useTimezone();

    const country = await findByTitle("timezones");

    const countriesTimezone = country.querySelectorAll("path");

    const firstTimezoneMap = countriesTimezone[15];

    const offsetFirstTimezoneMap = firstTimezoneMap.classList.value;

    await fireEvent.mouseOver(firstTimezoneMap);

    expect(offsetFirstTimezoneMap).toBe("9");

    expect(timerStore.ofsetTimezone).toBe("9");
  });
});
