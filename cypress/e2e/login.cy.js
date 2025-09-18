const LoginPage = require('../support/pages/LoginPage');

describe('Login Flow Test Suite', () => {
  const login = new LoginPage();

  before(() => {
    cy.task('clearLogs');
  });

  it('should login with valid credentials', () => {
    login.visit()
      .fillEmail('test@example.com')
      .fillPassword('P@ssw0rd')
      .submit();

    cy.url().should('include', '/login.html');
    cy.attachExecutionLogToReport();
  });
});
