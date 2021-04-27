describe('User can see menu', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      methode: 'GET',
      url: 'http://localhost:3001/api/menu',
      response: "fixture:menu_example.json",
    })
    cy.visit('http://localhost:3001')
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
