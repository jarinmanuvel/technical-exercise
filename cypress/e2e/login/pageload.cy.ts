describe('psge load validation', () => {
  it('passes', () => {
    cy.visit('https://app.qa.nesto.ca/login')
    cy.get('#didomi-notice-agree-button').click() //clicking to accept the pop up window
    cy.get('#loginPage_signUp').click() //navigates to sign up page
  })
})