const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
env: {
access_key: "020fb8678e4a4f80a349b777eed308c6"
}
});
