describe('Given the user is in the sign up page and language is French', () => {
    context('When User Views all the fields and clicks on submit without filling any fields', () => {
        beforeEach(() => {
            // Navigate to the signup page before each test
            cy.visit('https://app.qa.nesto.ca/signup')
            // Check for the consent button and click if visible
            cy.get('#didomi-notice-agree-button').should('be.visible')
            cy.acceptConsent()
            // Toggle language to French if the page is in English
            cy.toggleLanguageToFrench()
            // For uncaught exception errors
            cy.on('uncaught:exception', (err, runnable) => {
                return false
            });
        });

        afterEach(function () {
            if (this.currentTest?.state === 'failed') {
                // Get the current date and time for the timestamp
                const now = new Date();
                const timestamp = now.toISOString().replace(/:/g, '-').slice(0, 19)

                const testDetails = {
                    title: this.currentTest.title,
                    fullTitle: this.currentTest.fullTitle(),
                    state: this.currentTest.state,
                    errorMessage: this.currentTest.err?.message || 'No error message available',
                    url: cy.url().then((currentUrl) => currentUrl),
                }

                // Generate the filename with the timestamp
                const filename = `${this.currentTest.title.replace(/ /g, '_')}_failure_details_${timestamp}.txt`
                const screenshotName = `${this.currentTest.title.replace(/ /g, '_')}_${timestamp}.png`

                // Write the test details to a text file
                cy.writeFile(`cypress/logs/${filename}`, JSON.stringify(testDetails, null, 2))

                // Take a screenshot for additional debugging
                cy.screenshot(screenshotName)
            }
        })

        it('Then they should see red border errors for empty mandatory fields when submitting', () => {
            // Click the submit button without filling any fields
            cy.get('#form_signup_createYourAccount').should('be.visible').click()
            // Call the custom command to validate error states
            cy.validateMandatoryFieldErrors()
            // Call the custom command to validate the "Required" messages
            cy.validateRequiredFieldMessages()
        });
    });
});
