const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 60000,     
  port: null,
  projectId: null,
  pageLoadTimeout: 60000,     
  port: null,
  projectId: null,
  pageLoadTimeout: 60000,     
  port: null,
  projectId: null,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
