describe('user can see the order', () => {
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

    cy.get('[data-cy="order-button-3"]').click()
    cy.get('[data-cy="order-button-3"]').click()

    cy.get("[data-cy=mains-button]").click();
    cy.get('[data-cy="order-button-2"]').click()

    cy.get("[data-cy=beverages-button]").click();
    cy.get('[data-cy="order-button-1"]').click()
  })

  

})
