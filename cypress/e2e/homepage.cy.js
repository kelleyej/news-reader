describe('homepage', () => {
 beforeEach(() => {
  cy.intercept('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${Cypress.env('env').access_key}`, {
    statusCode: 200, 
    fixture: 'articles'
  }), 
  cy.visit('http://localhost:3000')
 })
 it('describes the landing page', () => {
  cy.get('h1').contains('News Reader')
  cy.get("input[placeholder='Search title by keyword']").exists
  cy.get('.article-styling').should('have.length', 2)
  cy.get('.article-styling').first().contains('p', '5/2/2024, 8:26:27 AM')
  cy.get('.article-styling').first().contains('h2', 'Today\'s top story')
  cy.get('.article-styling').first().contains('p', 'Today is a very important news day')
  cy.get('.article-styling').last().contains('p', '5/2/2024, 8:26:27 AM')
  cy.get('.article-styling').last().contains('h2', 'Today\'s second top story')
  cy.get('.article-styling').last().contains('p', 'Today is a very important news day, not as important as the first story')
 })
 it('describes the search filter', () => {
  cy.get("input[placeholder='Search title by keyword']").type('second').should('have.value', 'second')
  cy.get('.article-styling').should('have.length', 1)
  cy.get('.article-styling').first().contains('p', '5/2/2024, 8:26:27 AM')
  cy.get('.article-styling').first().contains('h2', 'Today\'s second top story')
  cy.get('.article-styling').first().contains('p', 'Today is a very important news day, not as important as the first story')
 })
})