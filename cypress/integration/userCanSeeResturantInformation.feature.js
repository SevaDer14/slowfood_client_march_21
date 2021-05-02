describe('resturant information', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3001/api/menu",
      response: "fixture:menu_example.json",
    });
    cy.visit("/");
  });
  it('displays information in footer', () => {
    cy.get('[data-cy="footer"]').should('be.visible')
    cy.get('[data-cy="adress-info"]').should('contain', 'Address: Böngatan 69')
    cy.get('[data-cy="phone-number"]').should('contain', 'Phone number: 070-1234567')
    cy.get('[data-cy="mail"]').should('contain', 'Email: bakedbeans@baked.com')
  });
})
