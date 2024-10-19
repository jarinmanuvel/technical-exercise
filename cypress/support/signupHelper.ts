Cypress.Commands.add('fillSignupForm', () => {
    // Enter a valid first name
    cy.get('#firstName').type('John')

    // Enter a valid last name
    cy.get('#lastName').type('Doe')

    // Enter a valid email address
    cy.get('#email').type('john.doe@example.com') 

    // Enter a valid phone number
    cy.get('#phone').type('1234567890') 

    // Enter a valid password
    cy.get('#password').type('Password@123') 

    // Confirm the password
    cy.get('#passwordConfirm').type('Password@123')

    //cy.get('select[#select_province]').select('Ontario')

    //click on checkbox
    cy.get('#checkbox_leadDistributeConsentAgreement').check() 
})