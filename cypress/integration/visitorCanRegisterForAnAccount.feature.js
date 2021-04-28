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
      cy.get('[data-cy="register"]').click();
      cy.get('[data-cy="email-input"]').type("example@example.com");
      cy.get('[data-cy="password-input"]').type("password")
      cy.get('[data-cy="password-confirmation-input"]').type("password")
      cy.get('[data-cy="submit"]').click()
      cy.get('[data-cy="success-message"]').should('contain','Successfull registration')
      cy.get('[data-cy="order-button"]').should('be.visible')
    });
  });
});
