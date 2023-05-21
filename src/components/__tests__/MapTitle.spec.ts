import { render } from "@testing-library/vue";
import MapTitle from "../MapTitle.vue";

describe("Component MapTitle", () => {
  it("should display correctly formatted offset and UTC", async () => {
    const ofsetTimezoneAmericaSaoPaulo = -3;

    const formatter = { timeZone: "America/Sao_Paulo" };

    const localData = new Date().toLocaleString("pt-BR", formatter);

    const { findByText } = render(MapTitle, {
      props: {
        ofsetTimezoneAmericaSaoPaulo,
      },
    });

    expect(await findByText(/( UTC -3:00 )/i));

    expect(await findByText(localData));
  });
});
