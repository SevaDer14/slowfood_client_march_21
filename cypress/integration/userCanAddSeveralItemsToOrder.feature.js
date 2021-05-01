describe('user can successfully update order', () => {
  before(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3001/api/menu',
      response: 'fixture:menu_example.json'
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3001/api/users',
      response: 'fixture:log_in.json'
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3001/api/orders',
      response: 'fixture:first_item_in_order.json'
    })
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3001/api/orders/**',
      response: 'fixture:secound_item_in_order.json' 
    })
    cy.visit('/')
    cy.get('[data-cy="log-in-button"]').click()
    cy.get('[data-cy="email-input"]').type("example@example.com")
    cy.get('[data-cy="password-input"]').type("password")
    cy.get('[data-cy="submit-log-in"]').click()
    cy.get('[data-cy="order-button-1"]').click()
    cy.get('[data-cy="order-button-2"]').click()
  });

  it('by adding a secound item', () => {
    cy.get('[data-cy="message"]').should('contain', 'This item was added to your order')
  });

  it('and the amount of items in the order will be displayed', () => {
    cy.get('[data-cy="item-count"]').should('contain', 'You have 2 items in your order')
  });
})
