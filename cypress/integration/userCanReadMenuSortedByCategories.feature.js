describe("User can see menu", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/menu",
      response: "fixture:menu_example.json",
    });
    cy.visit("/");
  });

  describe("user can select diffrent menu categories ", () => {
    it("Starters category", () => {
      cy.get("[data-cy=starters-button]").click();
      cy.get("[data-cy=menu-category-header]").should(
        "contain.text",
        "starters"
      );
      cy.get("[data-cy=menu-listing]").within(() => {
        cy.get("[data-cy=starter-0]")
          .first()
          .find("[data-cy=title]")
          .should("contain", "Small beans");
        cy.get("[data-cy=starter-0]")
          .first()
          .find("[data-cy=description]")
          .should("be.visible");
        cy.get("[data-cy=starter-0]")
          .first()
          .find("[data-cy=price]")
          .should("be.visible");
      });
    });


    it("Mains category", () => {
      cy.get("[data-cy=mains-button]").click();
      cy.get("[data-cy=menu-category-header]").should(
        "contain.text",
        "mains"
      );
      cy.get("[data-cy=menu-listing]").within(() => {
        cy.get("[data-cy=main-0]")
          .first()
          .find("[data-cy=title]")
          .should("contain", "Big beans");
        cy.get("[data-cy=main-0]")
          .first()
          .find("[data-cy=description]")
          .should("be.visible");
        cy.get("[data-cy=main-0]")
          .first()
          .find("[data-cy=price]")
          .should("be.visible");
      });
    });
    it("Desserts category", () => {
      cy.get("[data-cy=desserts-button]").click();
      cy.get("[data-cy=menu-category-header]").should(
        "contain.text",
        "desserts"
      );
      cy.get("[data-cy=menu-listing]").within(() => {
        cy.get("[data-cy=dessert-0]")
          .first()
          .find("[data-cy=title]")
          .should("contain", "Sweet beans");
        cy.get("[data-cy=dessert-0]")
          .first()
          .find("[data-cy=description]")
          .should("be.visible");
        cy.get("[data-cy=dessert-0]")
          .first()
          .find("[data-cy=price]")
          .should("be.visible");
      });
    });


    it("Beverages category", () => {
      cy.get("[data-cy=beverages-button]").click();
      cy.get("[data-cy=menu-category-header]").should(
        "contain.text",
        "beverages"
      );
      cy.get("[data-cy=menu-listing]").within(() => {
        cy.get("[data-cy=beverage-0]")
          .first()
          .find("[data-cy=title]")
          .should("contain", "Coke");
        cy.get("[data-cy=beverage-0]")
          .first()
          .find("[data-cy=size]")
          .should("be.visible");
        cy.get("[data-cy=beverage-0]")
          .first()
          .find("[data-cy=price]")
          .should("be.visible");
      });
    });
  });
})