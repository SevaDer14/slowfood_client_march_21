describe("A button to add product to order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      methode: "GET",
      url: "http://localhost:3001/api/menu",
      response: "fixture:menu_example.json",
    });
    cy.visit("/");
  });

  describe("should be visible", () => {
    it("for authenticated users", () => {
      cy.get('[data-cy="register]').click();
      cy.get('[data-cy="email-input]').type("example@example.com");
    });
  });
});
