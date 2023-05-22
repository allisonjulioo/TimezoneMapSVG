/// <reference types="cypress" />

const PORT = process.env.PORT || 5173;

describe("Pinia demo with counters", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`);
  });

  it("works", () => {
    cy.wait(500)
      .get("[your selector]")
      .eq(0)
      .invoke("show")
      .trigger("mouseenter")
      .wait(1000)
      .should("have.attr", "your-selector", "Active tooltip")
      .trigger("mouseleave");
  });
});
