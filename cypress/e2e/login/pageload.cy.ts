describe('Given User Navigates to the Login URL', () => {
  context('When User views the Login Page', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      });
      // Navigate to the login page before each test
      cy.visit('https://app.qa.nesto.ca/login')
      // Clicking to accept the pop-up window
      //cy.get('#didomi-notice-agree-button').click()
      cy.get('body').then(($body) => {
        if ($body.find('#didomi-notice-agree-button').length > 0) {
          cy.get('#didomi-notice-agree-button').should('be.visible').click({ force: true });
        } else {
          cy.log('Didomi consent button not found; proceeding without it.');
        }
      })
    })

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
        // Get the current date and time for the timestamp
        const now = new Date()
        const timestamp = now.toISOString().replace(/:/g, '-').slice(0, 19) // Format: YYYY-MM-DDTHH-MM-SS

        const testDetails = {
          title: this.currentTest.title,
          fullTitle: this.currentTest.fullTitle(),
          state: this.currentTest.state,
          errorMessage: this.currentTest.err?.message || 'No error message available',
          url: cy.url().then((currentUrl) => currentUrl),
        };

        // Generate the filename with the timestamp
        const filename = `${this.currentTest.title.replace(/ /g, '_')}_failure_details_${timestamp}.txt`
        const screenshotName = `${this.currentTest.title.replace(/ /g, '_')}_${timestamp}.png`

        // Write the test details to a text file
        cy.writeFile(`cypress/logs/${filename}`, JSON.stringify(testDetails, null, 2))

        // Take a screenshot for additional debugging
        cy.screenshot(screenshotName)
      }
    })

    it('Then User must be navigated to the Signup Page', () => {
      // Navigates to the login page
      cy.visit('https://app.qa.nesto.ca/login')

      // Clicking to accept the pop-up window
      //cy.get('#didomi-notice-agree-button').click()
      cy.get('body').then(($body) => {
        if ($body.find('#didomi-notice-agree-button').length > 0) {
          cy.get('#didomi-notice-agree-button').should('be.visible').click({ force: true });
        } else {
          cy.log('Didomi consent button not found; proceeding without it.');
        }
      })

      // Navigates to the sign up page
      cy.get('#loginPage_signUp').click()

      // Assertion to validate the URL
      cy.url().should('include', '/signup')

      // Assertion to validate the content
      cy.contains('Create a nesto account').should('be.visible')
    });
  });
});
