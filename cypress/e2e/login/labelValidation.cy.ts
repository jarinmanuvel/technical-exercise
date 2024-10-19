describe('Given the user is in the sign up page', () => {
    beforeEach(() => {
        // Navigate to the login page before each test
        cy.visit('https://app.qa.nesto.ca/signup')

        //accept the pop up
        cy.get('#didomi-notice-agree-button').click()

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
    it('When User Views all the fields Then they should see all required labels correctly displayed', () => {
        cy.validateLabels()
        cy.contains('Create a nesto account').should('be.visible')

    })
})
