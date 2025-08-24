const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rxc7jv',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
