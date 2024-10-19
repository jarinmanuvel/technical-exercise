describe('page load validation', () => {
  beforeEach(() => {
    cy.on ('uncaught:exception', (err, runnable) => {
    return false
    })
    })

  it('passes', () => {
    //navigates to the login page
    cy.visit('https://app.qa.nesto.ca/login')

    //clicking to accept the pop up window
    cy.get('#didomi-notice-agree-button').click() 

    //navigates to sign up page
    cy.get('#loginPage_signUp').click() 

    //assertion to validate the URL
    cy.url().should('include', '/signup'); 
  })
})