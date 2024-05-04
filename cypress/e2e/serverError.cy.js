describe('homepage', () => {
    beforeEach(() => {
     cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env('env').access_key}`, {
       statusCode: 500, 
       fixture: 'articles'
     }), 
     cy.visit('http://localhost:3000')
    })
    it('describes user feedback with error', () => {
        cy.get('h3').contains('Oh no!')
    })
})