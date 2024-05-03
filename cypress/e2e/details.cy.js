describe('details page', () => {
    beforeEach(() => {
     cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env('access_key')}`, {
       statusCode: 200, 
       fixture: 'articles'
     }), 
     cy.visit('http://localhost:3000')
    })
    it('describes the article details page', () => {
        cy.get('.article-styling').first().contains('p', '5/2/2024, 8:26:27 AM').click()
        cy.url().should('eq', 'http://localhost:3000/articles/Today\'s%20top%20story')
        cy.get('h1').contains('News Reader')
        cy.get('button').exists
        cy.get('.details-container').should('have.length', 1)
        cy.get('h2').contains('Today\'s top story')
        cy.get('p').contains('5/2/2024, 8:26:27 AM')
        cy.get('p').contains('blah blah blah blah')
        cy.get('p').contains('Source: abc.com')
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/')
    })          
})