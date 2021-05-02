describe("user can see the order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/menu",
      response: "fixture:menu_example.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/users",
      response: "fixture:log_in.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3001/api/orders",
      response: "fixture:first_item_in_order.json",
    });
    cy.route({
      method: "PUT",
      url: "http://localhost:3001/api/orders/**",
      response: "fixture:active_order.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/orders/**",
      response: "fixture:active_order_2.json",
    });
    cy.visit("/");
    cy.get('[data-cy="log-in-button"]').click();
    cy.get('[data-cy="email-input"]').type("example@example.com");
    cy.get('[data-cy="password-input"]').type("password");
    cy.get('[data-cy="submit-log-in"]').click();

    cy.get('[data-cy="order-button-3"]').click();
    cy.get('[data-cy="order-button-3"]').click();

    cy.get("[data-cy=mains-button]").click();
    cy.get('[data-cy="order-button-2"]').click();

    cy.get("[data-cy=beverages-button]").click();
    cy.get('[data-cy="order-button-1"]').click();
    cy.get('[data-cy="order-button-2"]').click();
    cy.get('[data-cy="view-order-button"]').click();
  });

  it("is expected to show order when view order button is pressed", () => {
    cy.get('[data-cy="menu-category-header"]').should(
      "contain.text",
      "Your order"
    );
    cy.get('[data-cy="order-list"]').within(() => {
      cy.get('[data-cy="item-0"]').within(() => {
        cy.get('[data-cy="title"]').should("contain.text", "Half beans");
        cy.get('[data-cy="price"]').should("contain", '55Kr');
      });
      cy.get('[data-cy="item-1"]').within(() => {
        cy.get('[data-cy="title"]').should("contain.text", "Half beans");
        cy.get('[data-cy="price"]').should("contain", '55Kr');
      });
      cy.get('[data-cy="item-2"]').within(() => {
        cy.get('[data-cy="title"]').should("contain.text", "BB beans");
        cy.get('[data-cy="price"]').should("contain", '135Kr');
      });
      cy.get('[data-cy="item-3"]').within(() => {
        cy.get('[data-cy="title"]').should("contain.text", "Coke");
        cy.get('[data-cy="price"]').should("contain", '25Kr');
      });
      cy.get('[data-cy="item-4"]').within(() => {
        cy.get('[data-cy="title"]').should("contain.text", "Zingo");
        cy.get('[data-cy="price"]').should("contain", '25Kr');
      });
    });
    cy.get('[data-cy="total-price"]').should('contain', '295Kr')
  });
});
