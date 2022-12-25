const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localline.github.io/QA-Automation-Specialist-Challenge/',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
