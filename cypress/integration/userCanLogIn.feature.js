describe('User can log in', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/users",
      response: "fixture:log_in.json",
    })
    cy.visit("/")
  })

  describe('successfully', () => {
    it('with email and password', () => {
      cy.get('[data-cy="log-in-button"]').click()
      cy.get('[data-cy="email-input"]').type("example@example.com")
      cy.get('[data-cy="password-input"]').type("password")
      cy.get('[data-cy="submit-log-in"]').click()
      cy.get('[data-cy="success-message"]').should('contain','You logged in successfully')
      cy.get('[data-cy="order-button"]').should('be.visible')
    });
  })
})
