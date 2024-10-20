describe('Given the user is in the sign up page', () => {
    context('When User Views all the fields and clicks on submit without filling any fields', () => {
        beforeEach(() => {
            // Navigate to the login page before each test
            cy.visit('https://app.qa.nesto.ca/signup')
            //accept the pop up
            //cy.get('#didomi-notice-agree-button').click()
            cy.get('body').then(($body) => {
                if ($body.find('#didomi-notice-agree-button').length > 0) {
                    cy.get('#didomi-notice-agree-button').click();
                }
            });
            //for uncaught exception errors
            cy.on('uncaught:exception', (err, runnable) => {
                return false
            })
        })
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

        //Validates the labels
        it('Then they should see all required labels correctly displayed', () => {
            cy.validateLabels()
            cy.contains('Create a nesto account').should('be.visible')

        })

        it('Then they should see red border errors for empty mandatory fields when submitting', () => {
            // Click the submit button without filling any fields
            cy.wait(1000)
            cy.get('#form_signup_createYourAccount').click()
            // Call the custom command to validate error states
            cy.validateMandatoryFieldErrors()
            // Call the custom command to validate the "Required" messages
            cy.validateRequiredFieldMessages()

        })
    })
})
