describe('search product', () => {
    it('Enter product name in search input and click search button', () => {

      cy.visit('https://automationexercise.com/products')

      cy.get('#search_product').type('shirt')

      cy.get('#submit_search').click()

      cy.get('.title.text-center').contains('Searched Products') //Assertion
    })
  
  })