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

    //cy.get('select[#select_province]').select('Ontario')

    //click on checkbox
    cy.get('#checkbox_leadDistributeConsentAgreement').check() 
})

Cypress.Commands.add('validateLabels', () => {

    // First Name Label Check in DOM
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div.sc-bdnxRM.sc-gtsrHT.hayblG.gfuSqG > div.sc-bdnxRM.dqWAcG > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('exist').and('be.visible');
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div.sc-bdnxRM.sc-gtsrHT.hayblG.gfuSqG > div.sc-bdnxRM.dqWAcG > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should ('contain.text','First Name')

    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div.sc-bdnxRM.sc-gtsrHT.hayblG.gfuSqG > div.sc-bdnxRM.ktZkOc > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('exist').and('be.visible')
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div.sc-bdnxRM.sc-gtsrHT.hayblG.gfuSqG > div.sc-bdnxRM.ktZkOc > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('contain.text', 'Last Name')


    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(3) > div > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('exist').and('be.visible')
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(3) > div > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('contain.text', 'Email') 

    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div.phonecomponent__Wrapper-jl1zyj-0.csBWUM > div > div > div.phone-inputcomponent__Placeholder-sc-176r2w-2.dsvpDF').should('exist').and('be.visible')
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div.phonecomponent__Wrapper-jl1zyj-0.csBWUM > div > div > div.phone-inputcomponent__Placeholder-sc-176r2w-2.dsvpDF').should('contain.text', 'Mobile phone number') 

    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div:nth-child(2) > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('exist').and('be.visible')
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div:nth-child(2) > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('contain.text', 'Password') 

    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div:nth-child(4) > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('exist').and('be.visible')
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div:nth-child(4) > div > div.text-inputcomponent__Placeholder-n1w94z-2.bpgCcN').should('contain.text', 'Confirm password')

    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div.sc-bdnxRM.selectcomponent__Wrapper-pyxzdc-0.jEPCdM.hACITx > div > div.selectcomponent__Placeholder-wgyntw-0.hokFBo').should('exist').and('be.visible')
    cy.get('#app > div.sc-bdnxRM.sc-gtsrHT.content-with-headerstyles__Wrapper-sc-55h4ny-0.bbHHmq.gfuSqG.jVANSL > div.sc-bdnxRM.sc-gtsrHT.page-containercomponent__GreyBackgroundWrapper-sc-1s96hju-1.gEQkDQ.gfuSqG.ktVOIF > div > div > form > div > div.sc-bdnxRM.eZkqhv > div:nth-child(4) > div.sc-bdnxRM.selectcomponent__Wrapper-pyxzdc-0.jEPCdM.hACITx > div > div.selectcomponent__Placeholder-wgyntw-0.hokFBo').should('contain.text', 'Province')

})