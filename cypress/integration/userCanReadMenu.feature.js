describe("User can see menu", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      methode: "GET",
      url: "http://localhost:3001/api/menu",
      response: "fixture:menu_example.json",
    });
    cy.visit("http://localhost:3001");
  });

  describe("Menu should be visible", () => {
    it("Shows menu", () => {
      cy.get('[data-cy="menu"]').within(() => {
        cy.get('[data-cy="starter-menu"]').within(() => {
          cy.get("[data-cy=starter]")
            .first()
            .find("[data-cy=title]")
            .should("contain", "Small beans");
          cy.get("[data-cy=description]").should("be.visible");
          cy.get('[data-cy="price"]').should("be.visible");
        });
        cy.get('[data-cy="main-menu"]').within(() => {
          cy.get("[data-cy=main]")
            .first()
            .find("[data-cy=title]")
            .should("contain", "Big beans");
        });
        cy.get('[data-cy="dessert-menu"]').within(() => {
          cy.get("[data-cy=dessert]")
            .first()
            .find("[data-cy=title]")
            .should("contain", "Sweet beans");
        });
        cy.get('[data-cy="beverage-menu"]').within(() => {
          cy.get("[data-cy=beverage]")
            .first()
            .find("[data-cy=title]")
            .should("contain", "Coke");
          cy.get('[data-cy="size"]').should("be.visible");
        });
      });
    });
  });
});
