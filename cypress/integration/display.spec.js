describe('Display', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('check', () => {
    cy.get('.5')
      .click()
      .get('.add')
      .click()
      .get('.2')
      .click()
      .get('.calculate')
      .click()
      .get('.history')
      .contains('5+2')
  })
})
