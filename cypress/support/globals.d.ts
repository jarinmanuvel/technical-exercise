// cypress/support/globals.d.ts

declare global {
    namespace Cypress {
      interface Chainable {
        fillSignupForm(): Chainable<void>
        validateLabels(): Chainable<void>
      }
    }
  }
  export {};
  