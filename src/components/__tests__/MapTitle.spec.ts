import { render } from "@testing-library/vue";
import { createPinia, setActivePinia } from "pinia";
import { useTimezone } from "../../store/useTimezone";
import MapTitle from "../MapTitle.vue";

describe("Component MapTitle", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should display correctly default title", async () => {
    const { findByText } = render(MapTitle);

    expect(await findByText("Mouse over the zone"));

    expect(await findByText("( UTC 00:00 )"));
  });

  it("should display correctly formatted offset and UTC", async () => {
    const timerStore = useTimezone();

    const ofsetTimezoneAmericaSaoPaulo = -3;

    const formatter = { timeZone: "America/Sao_Paulo" };

    const localData = new Date().toLocaleString("pt-BR", formatter);

    const { findByText } = render(MapTitle);

    timerStore.setOfsetTimezone(ofsetTimezoneAmericaSaoPaulo);

    expect(await findByText(/( UTC -3:00 )/i));

    expect(await findByText(localData));
  });
});
