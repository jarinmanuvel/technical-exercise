describe('Given User is in the signup page', () => {
    context('When the user selects the language as English', () => {
        beforeEach(() => {
            cy.visit('https://app.qa.nesto.ca/signup')
            // Clicking to accept the pop-up window
            cy.get('#didomi-notice-agree-button').should('be.visible')
            cy.acceptConsent()
            cy.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cy.toggleLanguageToEnglish()
        })

        afterEach(function () {
            if (this.currentTest?.state === 'failed') {
                // Get the current date and time for the timestamp
                const now = new Date()
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

        it('should display the correct labels', () => {
            // Asserts that the labels are correct based on the selected language
            cy.get('[data-test-id="input_label-firstName"]').should('be.visible').and('contain', 'First name')
            // Call the validation for English labels
            cy.validateLabels() 
        })

        it('should show an error message for an invalid email format', () => {
            // Fill the form with invalid email
            cy.get('#firstName').type('John')
            cy.get('#lastName').type('Doe')
            cy.get('#email').type('not-an-email')
            cy.get('#password').type('ValidPassword123!')
            cy.get('#passwordConfirm').type('ValidPassword123!')

            // Click the Sign Up button
            cy.get('#form_signup_createYourAccount').click()

            // Assert that the correct error message is displayed in English
            cy.get('[data-test-id="validation_errors_invalidEmail"]').should('contain', 'Invalid email address')
        })
    })
})
