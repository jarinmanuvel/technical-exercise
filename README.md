# Technical Exercise - Cypress Test Suite

This repository contains a Cypress test suite for testing the signup functionality of the [Nesto application](https://app.qa.nesto.ca/login).

## Table of Contents
- [Overview](#overview)
- [Test Files](#test-files)
  - [Field Validation Tests for French language](#field-validation-tests)
  - [Page Load Tests for French language](#page-load-tests)
  - [User Signup Tests for French language](#user-signup-tests)
  - [Invalid Email Entry Validation for French Language](#field-validation-tests)
  - [Successful User Sign up for French Language] (#User Sign up)
  - [Field Validation Tests for English language](#signup-language-tests)
  - [Page Load Tests for English language](#page-load-tests)
  - [User Signup Tests for English language](#user-signup-tests)
  - [Invalid Email Entry Validation for English Language](#field-validation-tests)
  - [Successful User Sign up for English Language] (#User Sign up)
- [Prerequisites](#prerequisites)
- [Dependencies](#dependencies)
- [Setup and Installation](#setup-and-installation)
- [Running Tests](#running-tests)

## Overview
The test suite validates different aspects of the signup process, including language selection, page load checks, form validation, and user signup scenarios. It supports both English and French languages and ensures the application's behavior meets expected conditions.

## Test Files
### 1. **field-validation-tests**
   - Verifies the behavior when toggling between English and French.
   - Checks the visibility and correctness of labels based on the language.

### 2. **Page Load Tests**
   - Validates that all elements load correctly when the login page is accessed.

### 3. **User Signup Tests**
   - Tests the complete signup process with valid input data and verifies API calls.

### 4. **Field Validation Tests**
   - Ensures that form fields display appropriate validation messages when left empty or incorrectly filled.

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

2. Navigate to project directory
   ```bash
  cd technical-exercise

3. Install Dependencies
  ```bash
  npm install

## Run Tests
Run the Cypress tests with the following commands:
- For English Language Validation scripts only:
  ```bash
  npm run report-en

- For French Language Validations scripts only:
  ```bash
  npm run report-fr

- For running all the scripts:
  ```bash
  npm run report
