Cypress.Commands.add('logStep', (msg) => {
    cy.log(msg);
    cy.task('writeLog', { filename: 'run.log', message: msg }, { log: false });
  });
  
  Cypress.Commands.add('attachExecutionLogToReport', () => {
    if (Cypress.TerminalReport && Cypress.TerminalReport.getLogs) {
      const txt = Cypress.TerminalReport.getLogs('txt');
      if (txt && cy.addTestContext) {
        cy.addTestContext({ title: 'Execution log', value: txt });
      }
    }
  });
  