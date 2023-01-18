const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
