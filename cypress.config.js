const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://dd-demo-tau.vercel.app',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      try {
        require('cypress-terminal-report/src/installLogsPrinter')(on);
      } catch (e) {}

      on('task', {
        writeLog({ filename = 'run.log', message }) {
          const logsDir = path.resolve('logs');
          if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
          const file = path.join(logsDir, filename);
          const line = `${new Date().toISOString()} - ${message}\n`;
          fs.appendFileSync(file, line);
          return null;
        },
        clearLogs() {
          const logsDir = path.resolve('logs');
          if (fs.existsSync(logsDir)) fs.rmSync(logsDir, { recursive: true, force: true });
          fs.mkdirSync(logsDir);
          return null;
        }
      });

      return config;
    }
  },
  video: true,
  screenshotOnRunFailure: true,
});
