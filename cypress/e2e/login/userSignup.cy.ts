import { generateRandomEmail } from "cypress/support/utils"
import { randomEmail } from 'cypress/support/commands'

describe('Given the user is on the sign-up page', () => {
  context('When the user fills in all the fields and submits the form', () => {
    beforeEach(() => {
      // Navigate to the sign-up page before each test
      cy.visit('https://app.qa.nesto.ca/signup')
      cy.get('#didomi-notice-agree-button').should('be.visible')
      // Clicking to accept the pop-up window
      cy.acceptConsent()
      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
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

    it('Then the user should successfully sign up, and the API call should return 201 with all the valid inputs in the body', () => {
      // Intercept the API call for signup
      cy.intercept('POST', 'https://app.qa.nesto.ca/api/accounts').as('signupRequest')

      // Fill in the sign-up form
      cy.fillSignupForm()

      // Click the Sign Up button
      cy.get('#form_signup_createYourAccount').click()

      // Validate the API call response
      cy.wait('@signupRequest').then((interception) => {
        // Ensure the API call was made
        expect(interception).to.exist

        // Validate the status code
        expect(interception.response?.statusCode).to.eq(201)

        // Validate the response body contains the form data
        expect(interception.response?.body).to.have.nested.property('account.firstName', 'John')
        expect(interception.response?.body).to.have.nested.property('account.lastName', 'Doe')
        expect(interception.response?.body).to.have.nested.property('account.region', 'ON')
        expect(interception.response?.body).to.have.nested.property('account.phone', '123-456-7890')
        expect(interception.response?.body.account.email).to.eq(randomEmail)
      })

      // Assert that the sign-up is successful
      cy.url().should('include', '/getaquote')
    })
  })
})
