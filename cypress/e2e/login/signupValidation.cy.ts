describe('Given the user is in the sign up page', () => {
    beforeEach(() => {
      // Navigate to the login page before each test
      cy.visit('https://app.qa.nesto.ca/signup')
      
      //accept the pop up
      cy.get('#didomi-notice-agree-button').click() 

      cy.on ('uncaught:exception', (err, runnable) => {
        return false
        })
    })
   /*
    afterEach(function () { 
      if (this.currentTest?.state === 'failed') {
        cy.screenshot(this.currentTest.title); // Take a screenshot if the test fails
      }
    })
      */

    //inputs the values
    it(' When User inputs all the fields and click on submit then user should successfully sign up', () => {
      cy.fillSignupForm()
    
      // Click the Sign Up button
      cy.get('#form_signup_createYourAccount').click()

      // Assert that the signup is successful
      cy.url().should('include', '/getaquote')
      cy.contains('How can we help you with your mortgage?').should('be.visible')
    })
  })
  