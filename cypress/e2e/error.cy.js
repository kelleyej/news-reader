describe('homepage', () => {
    beforeEach(() => {
     const apiKey = Cypress.env('REACT_APP_API_KEY')
    
     cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=020fb8678e4a4f80a349b777eed308c6`, {
       statusCode: 404, 
       fixture: 'articles'
     }), 
     cy.visit('http://localhost:3000')
    })
    it('describes user feedback with error', () => {
        cy.get('h3').contains('Oh no!')
    })
})