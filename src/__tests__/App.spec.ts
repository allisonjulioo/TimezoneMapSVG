import { render, screen } from "@testing-library/vue";
import App from "../App.vue";
import { useTimezone } from "../store/useTimezone";

describe("Component MapTitle", () => {
  it("should display default title map header", async () => {
    const formatter = { timeZone: "utc" };

   const defaultUTCData = new Date().toLocaleString("pt-BR", formatter);

    const defaultUTC = "( UTC 00:00 )";

    render(App);

    expect(await screen.findByText(defaultUTC));

    expect(await screen.findByText(defaultUTCData));
  });

  it("should display correctly the map header on timezone store", async () => {
    const formatter = { timeZone: "America/Sao_Paulo" };

    render(App);

    const timerStore = useTimezone();

    timerStore.setOfsetTimezone("-3");

    const defaultUTCData = new Date().toLocaleString("pt-BR", formatter);

    const defaultUTC = "( UTC -3:00 )";

    expect(await screen.findByText(defaultUTC));

    expect(await screen.findByText(defaultUTCData));
  });

  it("should display mount svg with all paths", async () => {
    const { findByTitle } = render(App);

    const mapSvg = await findByTitle("timezones");

    const totalPathsTimezone = 37;

    expect(mapSvg.childElementCount).toEqual(totalPathsTimezone);
  });
});
