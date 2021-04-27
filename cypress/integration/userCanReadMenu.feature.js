describe('User can see menu', () => {
  beforeEach(() => {
    cy.intercept("http:/localhost:3000/api/menu", {
      fixture: "menu_example.json",
    });
    cy.visit('/')
  })

  describe('Menu should be visible', () => {
    it("Shows menu", () => {
      cy.get('[data-cy="starter-menu"]').should("be.visible")
      cy.get('[data-cy="main-menu"]').should("be.visible")
      cy.get('[data-cy="dessert-menu"]').should("be.visible")
      cy.get('[data-cy="beverage-menu"]').should("be.visible")
    })
  })
})
