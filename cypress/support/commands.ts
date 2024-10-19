/// <reference types="cypress" />
import { generateRandomEmail } from '../support/utils';

Cypress.Commands.add('fillSignupForm', () => {
    // Enter a valid first name
    cy.get('#firstName').type('John')

    // Enter a valid last name
    cy.get('#lastName').type('Doe')

    //generates random email
    const randomEmail = generateRandomEmail();
    // Enters a valid email address
    cy.get('#email').type(randomEmail)

    // Enter a valid phone number
    cy.get('#phone').type('1234567890')

    // Enter a valid password
    cy.get('#password').type('Password@12345678')

    // Confirm the password
    cy.get('#passwordConfirm').type('Password@12345678')

    //Selecting the Province to Ontario from the drop down
    cy.get('#select_province').click()
    cy.get('.react-select__menu.css-18td19-menu').should('be.visible').contains('Ontario').click();

    //click on checkbox
    cy.get('#checkbox_leadDistributeConsentAgreement').check()
})


Cypress.Commands.add('validateLabels', () => {

    // First Name Label Check 
    cy.get('[data-test-id="input_label-firstName"]').should('exist');
    cy.get('[data-test-id="input_label-firstName"]').should('contain.text', 'First name')

    // Last Name Label Check
    cy.get('[data-test-id="input_label-lastName"]').should('exist');
    cy.get('[data-test-id="input_label-lastName"]').should('contain.text', 'Last name')
    
    // Email Label Check
    cy.get('[data-test-id="input_label-email"]').should('exist');
    cy.get('[data-test-id="input_label-email"]').should('contain.text', 'Email')

    // Mobile Phone Number Label Check
    cy.get('[data-test-id="input_label-phone"]').should('exist');
    cy.get('[data-test-id="input_label-phone"]').should('contain.text', 'Mobile phone number')

    // Password Label Check
    cy.get('[data-test-id="input_label-password"]').should('exist');
    cy.get('[data-test-id="input_label-password"]').should('contain.text', 'Password')

    // Confirm Password Label Check
    cy.get('[data-test-id="input_label-passwordConfirm"]').should('exist');
    cy.get('[data-test-id="input_label-passwordConfirm"]').should('contain.text', 'Confirm password')

    // Province Label Check
    cy.get('[data-test-id="select_label-province"]').should('exist');
    cy.get('[data-test-id="select_label-province"]').should('contain.text', 'Province')

})