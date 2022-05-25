describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('check navigation settings page', () => {
    cy.visit('/')
    cy.get('nav a:last').click()
    cy.server()
    cy.route('**/settings')
  })
  it('check navigation home page', () => {
    cy.visit('/')
    cy.get('nav a:first').click()
    cy.server()
    cy.route('**/')
  })
})
