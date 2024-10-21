describe('Given User Navigates to the Login URL', () => {
  context('When User views the Login Page', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      // Navigate to the login page before each test
      cy.visit('https://app.qa.nesto.ca/login');
      // Clicking to accept the pop-up window
      cy.get('body').then(($body) => {
        if ($body.find('#didomi-notice-agree-button').length > 0) {
          cy.get('#didomi-notice-agree-button').should('be.visible').click({ force: true });
        } else {
          cy.log('Didomi consent button not found; proceeding without it.');
        }
      });
    });

    it('Then the title, fields, login button, and forgot password link should be visible', () => {
      // Validate the login page title
      cy.contains('Log in to your account').should('be.visible');

      // Validate the presence of the email and password fields
      cy.get('#email').should('be.visible');
      cy.get('#password').should('be.visible');

      // Validate the presence of the login button
      cy.get('#form_signup_login').should('be.visible');

      // Validate the presence of the forgot password link
      cy.get('#form_signup_forgotPassword').should('be.visible');
    });

    it('Then clicking the Forgot Password link should navigate to the Password Assistance page', () => {
      // Click the forgot password link
      cy.get('#form_signup_forgotPassword').click();

      // Validate the URL includes '/forgot-password'
      cy.url().should('include', '/forgot');

      // Validate the title on the Password Assistance page
      cy.contains('Password assistance').should('be.visible');

      // Validate the presence of the email input field and reset password button
      cy.get('#email').should('be.visible');
      cy.get('#form_resetPassword_resetPassword').should('be.visible');

      // Click the return button to go back to the login page
      cy.get('#form_resetPassword_returnToLogin').click();

      // Validate the login page elements again
      cy.contains('Log in to your account').should('be.visible');
      cy.get('#email').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('#form_signup_login').should('be.visible');
      cy.get('#form_signup_forgotPassword').should('be.visible');
    });
  });

  context('When User clicks on Signup Link', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });

    it('Then User must be navigated to the Signup Page', () => {
      cy.visit('https://app.qa.nesto.ca/login');

      cy.get('body').then(($body) => {
        if ($body.find('#didomi-notice-agree-button').length > 0) {
          cy.get('#didomi-notice-agree-button').should('be.visible').click({ force: true });
        } else {
          cy.log('Didomi consent button not found; proceeding without it.');
        }
      });

      cy.get('#loginPage_signUp').click();
      cy.url().should('include', '/signup');
      cy.contains('Create a nesto account').should('be.visible');

      // Validate the login link presence on the signup page
      cy.get('#createAccountPage_login').should('be.visible').click();
      cy.url().should('include', '/login');
      // Navigate back to the signup page again
      cy.get('#loginPage_signUp').click();

      // Validate the "Terms of Services" link
      cy.get('#createAccountAgreement').should('be.visible').click();
    });

    afterEach(function () {
      if (this.currentTest?.state === 'failed') {
        const now = new Date();
        const timestamp = now.toISOString().replace(/:/g, '-').slice(0, 19);

        const testDetails = {
          title: this.currentTest.title,
          fullTitle: this.currentTest.fullTitle(),
          state: this.currentTest.state,
          errorMessage: this.currentTest.err?.message || 'No error message available',
          url: cy.url().then((currentUrl) => currentUrl),
        };

        const filename = `${this.currentTest.title.replace(/ /g, '_')}_failure_details_${timestamp}.txt`;
        const screenshotName = `${this.currentTest.title.replace(/ /g, '_')}_${timestamp}.png`;

        cy.writeFile(`cypress/logs/${filename}`, JSON.stringify(testDetails, null, 2));
        cy.screenshot(screenshotName);
      }
    });
  });
});
