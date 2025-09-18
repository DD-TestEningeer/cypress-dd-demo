const RegisterPage = require("../support/pages/RegisterPage");

describe("Register Flow Test Suite", () => {
  const register = new RegisterPage();

  before(() => {
    cy.task("clearLogs");
  });

  it("Verify the user registration with valid credentials", () => {
    register
      .visit()
      .fillUsername("DDUser")
      .fillEmail("test@example.com")
      .fillPassword("P@ssw0rd")
      .register();

    cy.url().should("include", "/register.html");
    cy.attachExecutionLogToReport();
  });
});
