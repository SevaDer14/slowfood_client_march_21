describe("user can see the order", () => {
  before(() => {
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
      response: "fixture:secound_item_in_order.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/orders/**",
      response: "fixture:active_order.json",
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
  });

  it("by adding a secound item", () => {
    cy.get('[data-cy="item-added-message"]').should(
      "contain",
      "This item was added to your order"
    );
  });

  it("and the amount of items in the order will be displayed", () => {
    cy.get('[data-cy="item-count"]').should(
      "contain.text",
      "You have 4 items in the basket"
    );
  });

  it("is expected to show order when view order button is pressed", () => {
    cy.get('[data-cy="view-order-button"]').click();
    cy.get('[data-cy="order-header"]').should("contain.text", "Your order");
    cy.get('[data-cy="order-list"]').within(() => {
      cy.get('[data-cy="starters"]').within(() => {
        cy.get('[data-cy="header"]').should("contain.text", "Starters");
        cy.get('[data-cy="item-0"]').within(() => {
          cy.get('[data-cy="title"]').should("contain.text", "Half beans");
          cy.get('[data-cy="amount"]').should("contain", "x2");
          cy.get('[data-cy="price"]').should("contain", 45);
        });
      });
      cy.get('[data-cy="mains"]').within(() => {
        cy.get('[data-cy="header"]').should("contain.text", "Mains");
        cy.get('[data-cy="item-0"]').within(() => {
          cy.get('[data-cy="title"]').should("contain.text", "BB beans");
          cy.get('[data-cy="amount"]').should("contain", "x1");
          cy.get('[data-cy="price"]').should("contain", 135);
        });
      });
      cy.get('[data-cy="beverages"]').within(() => {
        cy.get('[data-cy="header"]').should("contain.text", "Beverages");
        cy.get('[data-cy="item-0"]').within(() => {
          cy.get('[data-cy="title"]').should("contain.text", "Coke");
          cy.get('[data-cy="amount"]').should("contain", "x1");
          cy.get('[data-cy="price"]').should("contain", 25);
        });
        cy.get('[data-cy="item-1"]').within(() => {
          cy.get('[data-cy="title"]').should("contain.text", "Zingo");
          cy.get('[data-cy="amount"]').should("contain", "x1");
          cy.get('[data-cy="price"]').should("contain", 25);
        });
      });
    });
  });
});
