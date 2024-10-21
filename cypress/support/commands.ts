/// <reference types="cypress" />
import { generateRandomEmail } from '../support/utils'

//generates random email and export it
export const randomEmail = generateRandomEmail()

Cypress.Commands.add('fillSignupForm', () => {
  // Enter a valid first name
  cy.get('#firstName').type('John', { delay: 100 })

  // Enter a valid last name
  cy.get('#lastName').type('Doe', { delay: 100 })

  // Enter a valid email address
  cy.get('#email').type(randomEmail, { delay: 100 })

  // Enter a valid phone number
  cy.get('#phone').type('1234567890', { delay: 100 })

  // Enter a valid password
  cy.get('#password').type('Password@12345678', { delay: 100 })

  // Confirm the password
  cy.get('#passwordConfirm').type('Password@12345678', { delay: 100 })

  // Selecting the Province to Ontario from the dropdown
  cy.get('#select_province').click()
  cy.get('.react-select__menu.css-18td19-menu').should('be.visible').contains('Ontario').click()

  // Click on the checkbox
  cy.get('#checkbox_leadDistributeConsentAgreement').check()
})


Cypress.Commands.add('validateLabels', () => {
  // Wait for the elements to be visible and contain the expected text dynamically
  cy.get('[data-test-id="input_label-firstName"]').should('be.visible').and('contain.text', 'First name')
  cy.get('[data-test-id="input_label-lastName"]').should('be.visible').and('contain.text', 'Last name')
  cy.get('[data-test-id="input_label-email"]').should('be.visible').and('contain.text', 'Email')
  cy.get('[data-test-id="input_label-phone"]').should('be.visible').and('contain.text', 'Mobile phone number')
  cy.get('[data-test-id="input_label-password"]').should('be.visible').and('contain.text', 'Password')
  cy.get('[data-test-id="input_label-passwordConfirm"]').should('be.visible').and('contain.text', 'Confirm password')
  cy.get('[data-test-id="select_label-province"]').should('be.visible').and('contain.text', 'Province')
})


Cypress.Commands.add('validateLabelsFr', () => {
  // Wait for the elements to be visible and contain the expected text dynamically
  cy.get('[data-test-id="input_label-firstName"]').should('be.visible').and('contain.text', 'Prénom')
  cy.get('[data-test-id="input_label-lastName"]').should('be.visible').and('contain.text', 'Nom de famille')
  cy.get('[data-test-id="input_label-email"]').should('be.visible').and('contain.text', 'Courriel')
  cy.get('[data-test-id="input_label-phone"]').should('be.visible').and('contain.text', 'Numéro de cellulaire')
  cy.get('[data-test-id="input_label-password"]').should('be.visible').and('contain.text', 'Mot de passe')
  cy.get('[data-test-id="input_label-passwordConfirm"]').should('be.visible').and('contain.text', 'Confirmez votre mot de passe')
  cy.get('[data-test-id="select_label-province"]').should('be.visible').and('contain.text', 'Province')
})


Cypress.Commands.add('validateMandatoryFieldErrors', () => {
  // Check that each mandatory field shows an error state using the data-test-id attribute
  cy.get('[data-test-id="form-error-firstName"]').should('be.visible')
  cy.get('[data-test-id="form-error-lastName"]').should('be.visible')
  cy.get('[data-test-id="form-error-email"]').should('be.visible')
  cy.get('[data-test-id="form-error-phone"]').should('be.visible')
  cy.get('[data-test-id="form-error-password"]').should('be.visible')
  cy.get('[data-test-id="form-error-passwordConfirm"]').should('be.visible')
})

Cypress.Commands.add('validateRequiredFieldMessages', () => {
  // Check that the "Required" or "Requis" message appears for six of the mandatory field
  cy.get('[data-test-id="validation_errors_isRequired"]').should('have.length', 6)
})

Cypress.Commands.add('toggleLanguageToFrench', () => {
  cy.get('[data-test-id="toggle-language"]').should('be.visible').click()
  cy.get('[data-test-id="toggle-language"]').then($toggle => {
    const toggleValue = $toggle.val() // Get the value of the toggle button
    if (toggleValue === 'FR') {
      // If the toggle value is 'FR', it means the page is in English, so switch to French
      cy.get('[data-test-id="toggle-language"]').should('be.visible').click()
    }
  })
})

Cypress.Commands.add('toggleLanguageToEnglish', () => {
  cy.get('[data-test-id="toggle-language"]').should('be.visible').click()
  cy.get('[data-test-id="toggle-language"]').then($toggle => {
    const toggleValue = $toggle.val() // Get the value of the toggle button
    if (toggleValue === 'EN') {
      // If the toggle value is 'EN', it means the page is in English, so switch to English
      cy.get('[data-test-id="toggle-language"]').should('be.visible').click()
    }
  })
})

Cypress.Commands.add('acceptConsent', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#didomi-notice-agree-button').length > 0) {
      cy.get('#didomi-notice-agree-button').click({ force: true })
    } else {
      cy.log('Consent button not found, proceeding without it.')
    }
  })
})
