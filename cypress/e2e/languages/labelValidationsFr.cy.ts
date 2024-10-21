describe('Given the user is on the sign-up page', () => {
    context('When User Views all the fields and clicks on submit without filling any fields', () => {
      beforeEach(() => {
        // Navigate to the sign-up page before each test
        cy.visit('https://app.qa.nesto.ca/signup');
        cy.get('#didomi-notice-agree-button').should('be.visible')
        // Click to accept the pop-up window if it appears
        cy.get('body').then(($body) => {
          if ($body.find('#didomi-notice-agree-button').length > 0) {
            cy.get('#didomi-notice-agree-button').should('be.visible').click({ force: true });
          } else {
            cy.log('Consent button not found; proceeding without it.');
          }
        });
        cy.get('[data-test-id="toggle-language"]').should('be.visible').click();
  
      // Check the language toggle button to see which language is active
      cy.get('[data-test-id="toggle-language"]').then($toggle => {
        const toggleValue = $toggle.val(); // Get the value of the toggle button
        if (toggleValue === 'FR') {
          // If the toggle value is 'FR', it means the page is in English, so switch to French
          cy.get('[data-test-id="toggle-language"]').should('be.visible').click();
        }
      });
      
  
        // for uncaught exception errors
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
      });
  
      afterEach(function () {
        if (this.currentTest?.state === 'failed') {
          // Get the current date and time for the timestamp
          const now = new Date();
          const timestamp = now.toISOString().replace(/:/g, '-').slice(0, 19); // Format: YYYY-MM-DDTHH-MM-SS
  
          const testDetails = {
            title: this.currentTest.title,
            fullTitle: this.currentTest.fullTitle(),
            state: this.currentTest.state,
            errorMessage: this.currentTest.err?.message || 'No error message available',
            url: cy.url().then((currentUrl) => currentUrl),
          };
  
          // Generate the filename with the timestamp
          const filename = `${this.currentTest.title.replace(/ /g, '_')}_failure_details_${timestamp}.txt`;
          const screenshotName = `${this.currentTest.title.replace(/ /g, '_')}_${timestamp}.png`;
  
          // Write the test details to a text file
          cy.writeFile(`cypress/logs/${filename}`, JSON.stringify(testDetails, null, 2));
  
          // Take a screenshot for additional debugging
          cy.screenshot(screenshotName);
        }
      });
  
      // Validates the labels
      it('Then they should see all required labels correctly displayed in French', () => {
        cy.validateLabelsFr();
        cy.contains('Créez un compte nesto').should('be.visible');
      });
    });
  });
  