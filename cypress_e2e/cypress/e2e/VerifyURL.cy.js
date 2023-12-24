describe('Verifying the URL', () => {
    it('Verify user is navigated to ALL PRODUCTS page successfully', () => {

        cy.visit("https://automationexercise.com/products")

        // assertions should + and

        /*
        cy.url().should('include', 'products')
        .should('eq', 'https://automationexercise.com/products')
        .should('contain', 'automationexercise')
        */

        cy.url().should('include', 'products')
        .and('eq', 'https://automationexercise.com/products')
        .and('contain', 'automationexercise')

        cy.get('#sale_image').should('exist')
        .get('.title.text-center').should('be.visible')

    })
})