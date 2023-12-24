describe('Login', () => {
    it('Login user with correct email and password', () => {
      cy.visit('https://automationexercise.com/')

      cy.get("a[href='/login']").click()

      cy.get("input[data-qa='login-email']").type("janie@gmail.com")

      cy.get("input[placeholder='Password']").type("janie123")

      cy.get("button[data-qa='login-button']").click()

      cy.get("a[href='/logout']").should('exist')
      
    })
  
  })