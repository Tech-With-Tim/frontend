describe("Navigation", () => {
  it("Home", () => {
    cy.visit("/");
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });

  it("Events", () => {
    cy.visit("/");
    cy.contains("Events").click();
    cy.contains("Timathon").click();
    cy.url().should("include", "/timathon");

    cy.visit("/");
    cy.contains("Events").click();
    cy.contains("Challenges").click();
    cy.url().should("include", "/challenges");
  });

  it("Community", () => {
    cy.visit("/");
    cy.contains("Community").click();
    cy.url().should("include", "/community");
  });

  it("Bot", () => {
    cy.visit("/");
    cy.contains("Bot").click();
    cy.url().should("include", "/bot");
  });
});
