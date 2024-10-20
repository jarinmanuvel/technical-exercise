describe('Given User Navigates to the Login URL', () => {
  context('When User views the Login Page', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      });
      // Navigate to the login page before each test
      cy.visit('https://app.qa.nesto.ca/login')
      // Clicking to accept the pop-up window
      cy.get('#didomi-notice-agree-button').click()
    });

    afterEach(function () {
      if (this.currentTest?.state === 'failed') {
        // Take a screenshot if the test fails
        cy.screenshot(this.currentTest.title)
      }
    });

    it('Then the title, fields, and login button should be visible', () => {
      // Validate the login page title
      cy.contains('Log in to your account').should('be.visible')

      // Validate the presence of the email and password fields
      cy.get('#email').should('be.visible')
      cy.get('#password').should('be.visible')

      // Validate the presence of the login button
      cy.get('#form_signup_login').should('be.visible')
    })
  })

  context('When User clicks on Signup Link', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      });
    });

    afterEach(function () {
      if (this.currentTest?.state === 'failed') {
        // Take a screenshot if the test fails
        cy.screenshot(this.currentTest.title)
      }
    });

    it('Then User must be navigated to the Signup Page', () => {
      // Navigates to the login page
      cy.visit('https://app.qa.nesto.ca/login')

      // Clicking to accept the pop-up window
      cy.get('#didomi-notice-agree-button').click()

      // Navigates to the sign up page
      cy.get('#loginPage_signUp').click()

      // Assertion to validate the URL
      cy.url().should('include', '/signup')

      // Assertion to validate the content
      cy.contains('Create a nesto account').should('be.visible')
    });
  });
});
