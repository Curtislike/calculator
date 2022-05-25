describe('Home page', () => {
  it('it check header', () => {
    cy.visit('/')
    cy.get('header').should('be.visible')
  })
})
