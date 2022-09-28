const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.99-bottles-of-beer.net',
  },
    video: false,
    reporter: 'junit',
    reporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
  },
});
