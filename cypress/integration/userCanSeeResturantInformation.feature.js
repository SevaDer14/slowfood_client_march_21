describe('resturant information', () => {
  before(() => {
    cy.visit('/')
  })

  it('displays information in footer', () => {
    cy.get('[data-cy="footer"]').should('be.visible')
    cy.get('[data-cy="adress-info"]').should('contain', 'Böngatan 69')
    cy.get('[data-cy="phone-number"]').should('contain', 'Phone number: 070-1234567')
    cy.get('[data-cy="mail"]').should('contain', 'bakedbeans@baked.com')
  });
})
