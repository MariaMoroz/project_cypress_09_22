const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.seat-os.com/',
  },
  env: {
    host: 'https://demo.seat-os.com/',
    email: 'demo+reseller@seat-os.com',
    password: '12345678'
  },
    video: false,
    reporter: 'junit',
    reporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
  },
});
