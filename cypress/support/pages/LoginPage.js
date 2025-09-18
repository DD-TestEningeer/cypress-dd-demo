class LoginPage {
    visit() {
      cy.visit('/login.html');
      cy.logStep('Visited /login');
      return this;
    }
  
    fillEmail(email) {
      cy.get('input[name="username"]').clear().type(email);
      cy.logStep(`Entered email: ${email}`);
      return this;
    }
  
    fillPassword(pw) {
      cy.get('input[name="password"]').clear().type(pw);
      cy.logStep('Entered password');
      return this;
    }
  
    submit() {
      cy.get('button[type="button"]').click();
      cy.logStep('Clicked Login');
      return this;
    }
  }
  
  module.exports = LoginPage;
  