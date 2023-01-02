const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    indexUrl: './index.html',
  },
  e2e: {
    supportFile: 'tests/support/e2e.js',
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: null,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
