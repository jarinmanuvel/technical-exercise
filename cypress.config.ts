import { defineConfig } from 'cypress'
//import 'cypress-mochawesome-reporter/register'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:spec', (spec) => {
        console.log(`Running: ${spec.relative}`)
      }),
      // Load mochawesome plugin
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  
    baseUrl: 'https://app.qa.nesto.ca/login', 
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    defaultCommandTimeout: 10000
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true, // Overwrite the previous report
    html: true,      // Generate HTML report
    json: true,      // Generate JSON report
    // Set a fixed report name (optional)
    reportName: 'cypress-test-report', // This will be used in the HTML file name
  },
})