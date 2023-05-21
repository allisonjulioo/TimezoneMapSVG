import { formatterOffset } from "../formatterOffset";

describe("utils / hour fomatter offset", () => {
  it("returns correct formmated hour by offset timer UTC", () => {
    expect(formatterOffset(3.3)).toBe("03:30");

    expect(formatterOffset(3)).toBe("03:00");

    expect(formatterOffset(-3)).toBe("-3:00");
  });
});
