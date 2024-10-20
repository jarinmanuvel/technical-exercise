describe('Given the user is in the sign up page', () => {
    context('When User Views all the fields and clicks on submit without filling any fields', () => {
        beforeEach(() => {
            // Navigate to the login page before each test
            cy.visit('https://app.qa.nesto.ca/signup')
            //accept the pop up
            cy.get('#didomi-notice-agree-button').click()
            //for uncaught exception errors
            cy.on('uncaught:exception', (err, runnable) => {
                return false
            })
        })
        afterEach(function () {
            if (this.currentTest?.state === 'failed') {
                cy.screenshot(this.currentTest.title); // Take a screenshot if the test fails
            }
        })

        //Validates the labels
        it('Then they should see all required labels correctly displayed', () => {
            cy.validateLabels()
            cy.contains('Create a nesto account').should('be.visible')

        })

        it('Then they should see red border errors for empty mandatory fields when submitting', () => {
            // Click the submit button without filling any fields
            cy.get('#form_signup_createYourAccount').click()
            // Call the custom command to validate error states
            cy.validateMandatoryFieldErrors()
            // Call the custom command to validate the "Required" messages
            cy.validateRequiredFieldMessages()

        })
    })
})
