declare global {
  namespace Cypress {
    interface Chainable {
      fillSignupForm(): Chainable<void>
      validateLabels(): Chainable<void>
      validateLabelsFr(): Chainable<void>
      validateMandatoryFieldErrors(): Chainable<void>
      validateRequiredFieldMessages(): Chainable<void>
    }
  }
}
export { }
