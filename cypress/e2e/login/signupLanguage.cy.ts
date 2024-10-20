describe('Given User is in the signup page', () => {
    const languages = ['English', 'French']

    languages.forEach((language) => {
        context(`When the user selects the language as ${language}`, () => {
            beforeEach(() => {
                cy.visit('https://app.qa.nesto.ca/signup')
                //accepts the pop up
                cy.get('#didomi-notice-agree-button').click()

                cy.on('uncaught:exception', (err, runnable) => {
                    return false
                })

                // Toggle the language
                cy.get('[data-test-id="toggle-language"]').click() // Clicks the toggle button

                // If the first click sets it to French, we toggle it again for English
                if (language === 'English') {
                    cy.get('[data-test-id="toggle-language"]').click() // Clicks again to switch to French
                }
            })

            it('should display the correct labels', () => {
                // Asserts that the labels are correct based on the selected language
                if (language === 'French') {
                    cy.get('[data-test-id="input_label-firstName"]').should('contain', 'Prénom')
                } else {
                    cy.get('[data-test-id="input_label-firstName"]').should('contain', 'First name')
                }
            })

            it('should show an error message for an invalid email format', () => {
                // Fill the form with invalid email
                cy.get('#firstName').type('John')
                cy.get('#lastName').type('Doe')
                cy.get('#email').type('not-an-email')
                cy.get('#password').type('ValidPassword123!')
                cy.get('#passwordConfirm').type('ValidPassword123!')

                // Click the Sign Up button
                cy.get('#form_signup_createYourAccount').click()

                // Assert that the correct error message is displayed in the corresponding language
                if (language === 'French') {
                    cy.get('[data-test-id="validation_errors_invalidEmail"]').should('contain', 'Courriel invalide')
                } else {
                    cy.get('[data-test-id="validation_errors_invalidEmail"]').should('contain', 'Invalid email address')
                }
            });
        });
    });
});
