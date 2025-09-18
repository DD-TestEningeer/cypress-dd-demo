const TextboxTestPage = require("../support/pages/TextboxTestPage");

describe("TextboxTestPage Flow Test Suite", () => {
  const textboxTest = new TextboxTestPage();

  before(() => {
    cy.task("clearLogs");
  });

  it("Verify the Textbox Test", () => {
    textboxTest
      .visit()
      .fillFullname("DD DemoUser")
      .fillEmail("testDemo@gmail.com")
      .fillCurrentAddress("Pune, Mh, India")
      .fillPermanentAddress("Pune, Mh, India")
      .submit();

    cy.url().should("include", "/textbox.html");
    cy.attachExecutionLogToReport();
  });
});
