const LoginPage = require('../support/pages/LoginPage');

describe('Login flow - POM + Logs + Screenshots', () => {
  const login = new LoginPage();

  before(() => {
    cy.task('clearLogs');
  });

  it('should login with valid credentials', () => {
    login.visit()
      .fillEmail('test@example.com')
      .fillPassword('P@ssw0rd')
      .submit();

    cy.url().should('include', '/login2.html');
    cy.attachExecutionLogToReport();
  });
});
