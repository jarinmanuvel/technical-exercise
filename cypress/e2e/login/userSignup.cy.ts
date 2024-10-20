import { generateRandomEmail } from "cypress/support/utils";
import { randomEmail } from 'cypress/support/commands';

describe('Given the user is on the sign-up page', () => {
  context('When the user fills in all the fields and submits the form', () => {
    beforeEach(() => {
      // Navigate to the sign-up page before each test
      cy.visit('https://app.qa.nesto.ca/signup');

      // Accept the pop-up
      cy.get('#didomi-notice-agree-button').click();

      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });

    afterEach(function () {
      if (this.currentTest?.state === 'failed') {
        // Take a screenshot if the test fails
        cy.screenshot(this.currentTest.title);
      }
    });

    it('Then the user should successfully sign up, and the API call should return 201 with all the valid inputs in the body', () => {
      // Intercept the API call for signup
      cy.intercept('POST', 'https://app.qa.nesto.ca/api/accounts').as('signupRequest');

      // Fill in the sign-up form
      cy.fillSignupForm();

      // Click the Sign Up button
      cy.get('#form_signup_createYourAccount').click();

      // Validate the API call response
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

      // Assert that the sign-up is successful
      cy.url().should('include', '/getaquote');
      cy.contains('How can we help you with your mortgage?').should('be.visible');
    });
  });
});
