const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.js',
    reporter: 'cypress-mochawesome-reporter',
    screenshotsFolder: 'cypress/reports/screenshots',
    videosFolder: 'cypress/reports/videos',
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportFilename: '[name].html', // Use the test name as the report filename
      overwrite: true,
      html: true, // Generate an HTML report
      json: true, // Do not generate a JSON report
      charts: true, // Include charts in the report
    },
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    viewportWidth: 1000,
    viewportHeight: 660,
  },
});
