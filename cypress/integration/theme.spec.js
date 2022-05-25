describe('Theme', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })
  it('check dark theme', () => {
    cy.get('.dropdown')
      .click()
      .get('.dropdownItem')
      .should('be.visible')
      .get('#dark')
      .click()
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(67, 67, 67)',
    )
  })
  it('check colored theme', () => {
    cy.get('.dropdown')
      .click()
      .get('.dropdownItem')
      .should('be.visible')
      .get('#colored')
      .click()
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(78, 64, 112)',
    )
  })
  it('check light theme', () => {
    cy.get('.dropdown')
      .click()
      .get('.dropdownItem')
      .should('be.visible')
      .get('#colored')
      .click()
    cy.get('header').should(
      'have.css',
      'background-color',
      'rgb(78, 64, 112)',
    )
  })
})
