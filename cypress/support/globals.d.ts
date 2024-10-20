declare global {
  namespace Cypress {
    interface Chainable {
      fillSignupForm(): Chainable<void>
      validateLabels(): Chainable<void>
      validateMandatoryFieldErrors(): Chainable<void>
      validateRequiredFieldMessages(): Chainable<void>
    }
  }
}
export { }
