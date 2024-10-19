
describe('Given the user is in the sign up page', () => {
    beforeEach(() => {
      // Navigate to the signup page before each test
      cy.visit('https://app.qa.nesto.ca/signup'); 
      
      //accept the pop up
      cy.get('#didomi-notice-agree-button').click() 

      // Click the Sign Up button
      cy.get('#form_signup_createYourAccount').click()

      cy.on ('uncaught:exception', (err, runnable) => {
        return false
        })
    });
  
    it(' When User inputs all the fields and click on submit then it should successfully sign up', () => {
      cy.fillSignupForm();
      // Assert that the signup is successful
      cy.url().should('include', '/getaquote'); 
      cy.contains('How can we help you with your mortgage?').should('be.visible');
    });
  });
  