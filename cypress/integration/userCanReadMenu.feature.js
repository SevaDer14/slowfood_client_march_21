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
      cy.get('[data-cy="menu"]').within(() => {
        cy.get('[data-cy="title"]').should("be.visible")
        cy.get('[data-cy="description"]').should("be.visible")
        cy.get('[data-cy="price"]').should("be.visible")
        cy.get('[data-cy="size"]').should("be.visible")
      })
      
    })
  })
})
