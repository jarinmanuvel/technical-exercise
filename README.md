# technical-exercise
Repository for a technical exercise

Cypress test suite that would cover Signup functionality for https://app.qa.nesto.ca/login

## Table of Contents
- [Overview](#overview)
- [Test Files](#test-files)
  - [Signup Language Tests](#signup-language-tests)
  - [Page Load Tests](#page-load-tests)
  - [User Signup Tests](#user-signup-tests)
  - [Field Validation Tests](#field-validation-tests)
- [Prerequisites](#prerequisites)
- [Dependencies](#dependencies)
- [Setup and Installation](#setup-and-installation)
- [Running Tests](#running-tests)

## Overview
This repository contains a Cypress test suite that covers the Signup functionality for https://app.qa.nesto.ca/login. The tests are designed to ensure that the signup process works correctly under various conditions and that the user interface behaves as expected.

## Test Files

### Signup Language Tests
File: `cypress/e2e/login/signupLanguage.cy.ts`

This test suite verifies the behavior of the signup page when the user selects different languages (English and French). It includes tests for:
- Visiting the signup page
- Accepting the pop-up
- Toggling the language
- Taking screenshots and logging details if a test fails

### Page Load Tests
File: `cypress/e2e/login/pageload.cy.ts`

This test suite verifies the behavior of the login page when the user navigates to the login URL. It includes tests for:
- Visiting the login page
- Accepting the pop-up
- Checking the visibility of the title, fields, and login button
- Taking screenshots if a test fails

### User Signup Tests
File: `cypress/e2e/login/userSignup.cy.ts`

This test suite verifies the behavior of the signup page when the user fills in all the fields and submits the form. It includes tests for:
- Visiting the signup page
- Accepting the pop-up
- Intercepting the API call for signup
- Taking screenshots and logging details if a test fails

### Field Validation Tests
File: `cypress/e2e/login/fieldValidation.cy.ts`

This test suite verifies the behavior of the signup page when the user views all the fields and clicks on submit without filling any fields. It includes tests for:
- Visiting the signup page
- Accepting the pop-up
- Validating the labels
- Taking screenshots and logging details if a test fails

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed Node.js (>=14.x.x)
- You have installed npm (>=6.x.x)
- You have a code editor or IDE such as Visual Studio Code

## Dependencies
This project uses the following npm packages:
- `@types/node`: "^22.7.6"
- `cypress`: "^13.15.0"
- `cypress-mochawesome-reporter`: "^3.8.2"
- `mochawesome`: "^7.1.3"
- `ts-node`: "^10.9.2"
- `typescript`: "^5.6.3"
- Additional dependencies can be found in the `package.json` file

## Setup and Installation
To set up and install the necessary dependencies, run the following commands: