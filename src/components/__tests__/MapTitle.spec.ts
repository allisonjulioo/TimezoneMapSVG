import { render } from "@testing-library/vue";
import MapTitle from "../MapTitle.vue";

describe("Component MapTitle", () => {
  it("should display correctly formatted offset and UTC", async () => {
    const ofsetTimezone = -3;

    const formatter = { timeZone: "America/Sao_Paulo" };

    const localData = new Date().toLocaleString("pt-BR", formatter);

    const wrapper = render(MapTitle, {
      props: {
        ofsetTimezone,
      },
    });

    expect(await wrapper.findByText(/( UTC -3:00 )/i));

    expect(await wrapper.findByText(localData));
  });
});
