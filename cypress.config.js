const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    host: 'https://qatest.site',
    email: 'agent@qatest.site',
    password: '12345678'
  },
    video: false,
    reporter: 'junit',
    reporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
  },
});
