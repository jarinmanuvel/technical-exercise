import { generateRandomEmail } from "cypress/support/utils"
import { randomEmail } from 'cypress/support/commands'
describe('Given the user is in the sign up page', () => {
  context('When User inputs all the fields and click on submit', () => {
    beforeEach(() => {
      // Navigate to the login page before each test
      cy.visit('https://app.qa.nesto.ca/signup')

      //accepts the pop up
      cy.get('#didomi-notice-agree-button').click()

      cy.on('uncaught:exception', (err, runnable) => {
        return false
      })
    })

    afterEach(function () {
      if (this.currentTest?.state === 'failed') {
        // Takes a screenshot if the test fails
        cy.screenshot(this.currentTest.title);
      }
    })

    //inputs the values
    it('Then user should successfully sign up and API call should return 201 with all the valid inputs in the body', () => {
      cy.intercept('POST', 'https://app.qa.nesto.ca/api/accounts').as('signupRequest')
      cy.fillSignupForm()

      // Click the Sign Up button
      cy.get('#form_signup_createYourAccount').click()
      cy.wait('@signupRequest').then((interception) => {
        // Ensure the API call was made
        expect(interception).to.exist;

        // Validate the status code
        expect(interception.response?.statusCode).to.eq(201);

        // Validate the response body contains the form data
        expect(interception.response?.body).to.have.nested.property('account.firstName', 'John');
        expect(interception.response?.body).to.have.nested.property('account.lastName', 'Doe');
        expect(interception.response?.body).to.have.nested.property('account.region', 'ON');
        expect(interception.response?.body).to.have.nested.property('account.phone', '123-456-7890');
        expect(interception.response?.body.account.email).to.eq(randomEmail);
      });

      // Assert that the signup is successful
      cy.url().should('include', '/getaquote')
      cy.contains('How can we help you with your mortgage?').should('be.visible')
    })
  })
})