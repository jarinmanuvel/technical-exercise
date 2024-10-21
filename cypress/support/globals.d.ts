declare global {
  namespace Cypress {
    interface Chainable {
      fillSignupForm(): Chainable<void>
      validateLabels(): Chainable<void>
      validateLabelsFr(): Chainable<void>
      validateMandatoryFieldErrors(): Chainable<void>
      validateRequiredFieldMessages(): Chainable<void>
      toggleLanguageToFrench():Chainable<void>
      toggleLanguageToEnglish():Chainable<void>
      acceptConsent():Chainable<void>
    }
  }
}
export { }
