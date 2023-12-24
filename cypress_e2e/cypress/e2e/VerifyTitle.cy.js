describe('verify title', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'Automation Exercise')
  })

  it('fails', () => {
    cy.visit('https://automationexercise.com/')
    cy.title().should('eq', 'AutomationExercise')
  })
})