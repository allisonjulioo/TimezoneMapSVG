import { assert, describe, it } from "vitest";
import { formatTimezoneOffset } from "../formatTimezoneOffset";

describe("utils / hour fomatter offset", () => {
  it("should returns correct formmated date by offset timer America/Sao_Paulo", () => {
    const formatter = { timeZone: "America/Sao_Paulo" };

    const localData = new Date().toLocaleString("pt-BR", formatter);

    const offsetTimezone = -3;

    assert.equal(formatTimezoneOffset(offsetTimezone), localData);
  });

  it("returns correct formmated date by offset timer America/Los_Angeles", () => {
    const formatter = { timeZone: "America/Los_Angeles" };

    const localData = new Date().toLocaleString("pt-BR", formatter);

    const offsetTimezone = -7;

    assert.equal(formatTimezoneOffset(offsetTimezone), localData);
  });
});
