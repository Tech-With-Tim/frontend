describe("Home page", () => {
  it("'Tech With Tim' to be on the home page", () => {
    cy.visit("/");
    cy.contains("Tech With Tim");
  });
});
