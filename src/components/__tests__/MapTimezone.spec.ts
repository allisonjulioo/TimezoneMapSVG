import { fireEvent, render } from "@testing-library/vue";
import MapTimezone from "../MapTimezone.vue";

describe("Component MapTimezone", () => {
  it('should emit "onOverCountry" event when country is hovered', async () => {
    const { emitted, findByTitle } = render(MapTimezone);

    const country = await findByTitle("timezones");

    const countriesTimezone = country.querySelectorAll("path");

    const firstTimezoneMap = countriesTimezone[1];

    const offsetFirstTimezoneMap = firstTimezoneMap.classList.value;

    await fireEvent.mouseOver(firstTimezoneMap);

    expect(emitted().onOverCountry).toBeTruthy();

    expect(emitted().onOverCountry[0]).toEqual(["1"]);

    expect(offsetFirstTimezoneMap).toBe("1");
  });
});
