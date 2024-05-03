describe('homepage', () => {
 beforeEach(() => {
  const apiKey = Cypress.env('REACT_APP_API_KEY')
  cy.intercepts('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, {
    statusCode: 200, 
    fixture: 'articles'
  })
 })
})