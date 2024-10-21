# Technical Exercise - Validate Signup Page

This repository contains a test suite for testing the signup functionality of the [Nesto application](https://app.qa.nesto.ca/login). The project is using cypress framework and the tests are written in typescript.

## Table of Contents
- [Overview](#overview)
- [Test Files](#test-files)
  - [Field Validation Tests for French Language](#field-validation-tests-for-french-language)
  - [Invalid Email Entry Validation for French Language](#invalid-email-entry-validation-for-french-language)
  - [Label Validation Tests for French Language](#label-validation-tests-for-french-language)
  - [Page Load Tests for French Language](#page-load-tests-for-french-language)
  - [Successful User Signup for French Language](#successful-user-signup-for-french-language)
  - [Field Validation Tests for English Language](#field-validation-tests-for-english-language)
  - [Invalid Email Entry Validation for English Language](#invalid-email-entry-validation-for-english-language)
  - [Label Validation Tests for English Language](#label-validation-tests-for-english-language)
  - [Page Load Tests for English Language](#page-load-tests-for-english-language)
  - [Successful User Signup for English Language](#successful-user-signup-for-english-language)
- [Prerequisites](#prerequisites)
- [Dependencies](#dependencies)
- [Setup and Installation](#setup-and-installation)
- [Running The Tests](#running-the-tests)
- [Viewing the Execution Report](viewing-the-execution-report)
- [Bugs Found While Testing](bugs-found-while-testing)

## Overview
The test suite validates different aspects of the signup process, including language selection, page load checks, form validation, and user signup scenarios. It supports both English and French languages to ensure the application's behavior meets expected conditions.

The project is using cypress framework and the tests are written in typescript. All the test files can be found under [e2e](.cypress/e2e) folder, [languages](.cypress/e2e/languages) folder under e2e contains all the tests that validates when the language of the website is toggled to French
[login](.cypress/e2e/login) folder under e2e contains all the tests that validates when the language of the website is English

I have used several resuable functions in that is used in the tests for both languages and it can be found in the `commands.ts` file under the folder [support](.cypress/support)

I have updated `package.json` file with the commands to run the scripts, you can also find those instructions below at [Running The Tests](#running-the-tests)

## Test Files

### Field Validation Tests for French Language
   - Verifies validation messages and label visibility for the French signup page.

### Invalid Email Entry Validation for French Language
   - Validates the error messages when an invalid email is entered in the French version. (Negative scenario)

### Label Validation Tests for French Language
   - Validates the labels in french language. 

### Page Load Tests for French Language
   - Ensures that all elements load correctly when the French login page is accessed.

### Successful User Signup for French Language
   - Tests successful signup process when the user is in the French Sign up page. (Positive scenario)

### Field Validation Tests for English Language
   - Verifies validation messages and label visibility for the English signup page.

### Invalid Email Entry Validation for English Language
   - Validates the error messages when an invalid email is entered in the English version.(negative scenario)

### Label Validation Tests for English Language
   - Validates the labels in English language. 

### Page Load Tests for English Language
   - Ensures that all elements load correctly when the English login page is accessed.

### Successful User Signup for English Language
   - Tests successful signup process when the user is in the English Sign up page. (positive scenario)

## Prerequisites
- Node.js (>= 14.x.x)
- npm (>= 6.x.x)
- A code editor like Visual Studio Code

## Dependencies
The following npm packages are used:
- `cypress`
- `cypress-mochawesome-reporter`
- `mochawesome`
- `typescript`
- `ts-node`

Additional dependencies are listed in the `package.json` file.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jarinmanuvel/technical-exercise.git
2. Navigate to the project directory
   ```bash
   cd technical-exercise
3. Install Dependencies
   ```bash
   npm install

## Running the Tests
- For executing all tests in English Language Pages - Runs the English Tests headless 
  ```bash
  npm run report-en

Sample execution of English language tests
![Sample execution of English language tests](cypress/sample%20docs/allenglishlanguagepassed.png)

- For executing all tests in French Language Pages - Runs the French Tests headless 
  ```bash
  npm run report-fr

Sample execution of French language tests
![Sample execution of French language tests](cypress/sample%20docs/allfrenchlanguagepassed.png)

- For executing all the Tests - Runs all the Tests headless
  ```bash
  npm run report

Sample execution of all the tests
![Sample execution of All tests](cypress/sample%20docs/alltestspassed.png)

- For executing all the Tests in the Cypress App
  ```bash
  npm run cy:open

## Viewing the Execution Report
Execution report is automatically generated using Mochawesome. You can find the report generated in the "/cypress/reports" directory after executing them headless. 

You can find a sample execution report under [sample docs](./cypress/sample%20docs) folder called mochaawesomereportsample.html, to view this sample make sure to download the html file along with the [assets](./cypress/sample%20docs/assets) folder from the [sample docs](./cypress/sample%20docs) folder and open the html file in your local browser. 

Sample Machawesome Report

![Sample Mochawesome report](cypress/sample%20docs/mochawesomesample.png)

## Bugs Found While Testing
[View the PDF](./cypress/sample%20docs/Bugs.pdf)
