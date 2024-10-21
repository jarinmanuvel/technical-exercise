# Technical Exercise - Cypress Test Suite

This repository contains a Cypress test suite for testing the signup functionality of the [Nesto application](https://app.qa.nesto.ca/login).

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
- [Running Tests](#running-tests)
- [Viewing the Execution Report](viewing-execution-report)

## Overview
The test suite validates different aspects of the signup process, including language selection, page load checks, form validation, and user signup scenarios. It supports both English and French languages to ensure the application's behavior meets expected conditions.

## Test Files

### Field Validation Tests for French Language
   - Verifies validation messages and label visibility for the French signup page.

### Invalid Email Entry Validation for French Language
   - Validates the error messages when an invalid email is entered in the French version.(negative scenario)

### Label Validation Tests for French Language
   - Validates the labels in french language. 

### Page Load Tests for French Language
   - Ensures that all elements load correctly when the French login page is accessed.

### Successful User Signup for French Language
   - Tests successful signup process using French language settings. (positive scenario)

### Field Validation Tests for English Language
   - Verifies validation messages and label visibility for the English signup page.

### Invalid Email Entry Validation for English Language
   - Validates the error messages when an invalid email is entered in the English version.(negative scenario)

### Label Validation Tests for English Language
   - Validates the labels in English language. 

### Page Load Tests for English Language
   - Ensures that all elements load correctly when the English login page is accessed.

### Successful User Signup for English Language
   - Tests successful signup process using English language settings. (positive scenario)

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

![Sample execution of English language tests](cypress/sample%20docs/allenglishlanguagepassed.png)

- For executing all tests in French Language Pages - Runs the French Tests headless 
  ```bash
  npm run report-fr

![Sample execution of French language tests](cypress/sample%20docs/allfrenchlanguagepassed.png)

- For executing all the Tests - Runs all the Tests headless
  ```bash
  npm run report

![Sample execution of All tests](cypress/sample%20docs/alltestspassed.png)

- For executing all the Tests in the Cypress App
  ```bash
  npm run cy:open

## Viewing the Execution Report
Execution report is automatically generated using Mochawesome. You can find the report generated in the "/cypress/reports" directory after executing them headless. 

You can find a sample execution report under [sample docs](./cypress/sample%20docs) folder called mochaawesomereportsample.html, to view this sample make sure to download the html file along with the [assets](./cypress/sample%20docs/assets) folder from the [sample docs](./cypress/sample%20docs) folder and open the html file in your local browser. 

## Bugs found while testing
[View the PDF](./cypress/sample%20docs/Bugs%20From%20Technical%20Exercise%20-%20Nesto.pdf)
