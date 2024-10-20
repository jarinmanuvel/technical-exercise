import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:spec', (spec) => {
        console.log(`Running: ${spec.relative}`);
      })
    },
    baseUrl: 'https://app.qa.nesto.ca/login', 
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    defaultCommandTimeout: 10000
  },
});