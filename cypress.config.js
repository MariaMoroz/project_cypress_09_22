const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');
const path = require('path');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  e2e: {
    setupNodeEvents(on, config) { 
      config = dotenvPlugin(config, { path: path.join(__dirname, '.env') }, true);
      return config
    },
  },
    video: false,
    reporter: 'junit',
    reporterOptions: {
    mochaFile: 'reports/test-results-[hash].xml',
  },
});
