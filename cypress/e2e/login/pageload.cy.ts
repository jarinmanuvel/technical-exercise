describe('Given User Navigates to the Login URL When User clicks on Signup Link', () => {
  beforeEach(() => {
    cy.on ('uncaught:exception', (err, runnable) => {
    return false
    })
    })
    
    afterEach(function () { 
      if (this.currentTest?.state === 'failed') {
        // Take a screenshot if the test fails
        cy.screenshot(this.currentTest.title)
      }
    })

  it('Then User must be navigated to the Signup Page', () => {
    //navigates to the login page
    cy.visit('https://app.qa.nesto.ca/login')

    //clicking to accept the pop up window
    cy.get('#didomi-notice-agree-button').click() 

    //navigates to sign up page
    cy.get('#loginPage_signUp').click() 

    //assertion to validate the URL
    cy.url().should('include', '/signup') 

    //assertion to validate the content
    cy.contains('Create a nesto account').should('be.visible')

  })
})