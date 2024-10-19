describe('Signup Page Positive Test Scenario', () => {
    beforeEach(() => {
      // Navigate to the signup page before each test
      cy.visit('https://app.qa.nesto.ca/signup'); 
      
      //accept the pop up
      cy.get('#didomi-notice-agree-button').click() 
    });
  
    it('should successfully sign up with valid inputs', () => {
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

      cy.get('#checkbox_leadDistributeConsentAgreement').check() 
  
      // Click the Sign Up button
      cy.get('#form_signup_createYourAccount').click()
  
      // Assert that the signup is successful
      cy.url().should('include', '/getaquote'); 
      cy.contains('How can we help you with your mortgage?').should('be.visible');
    });
  });
  