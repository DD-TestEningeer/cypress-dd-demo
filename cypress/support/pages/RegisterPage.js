class RegisterPage {
    visit() {
      cy.visit('/register.html');
      cy.logStep('Visited /register');
      return this;
    }

    fillUsername(username) {
        cy.get('input[name="userName"]').clear().type(username);
        cy.logStep(`Entered email: ${username}`);
        return this;
      }
  
    fillEmail(email) {
      cy.get('input[name="userEmail"]').clear().type(email);
      cy.logStep(`Entered email: ${email}`);
      return this;
    }
  
    fillPassword(pw) {
      cy.get('input[name="password"]').clear().type(pw);
      cy.logStep('Entered password');
      return this;
    }
  
    register() {
      cy.contains('Register').click();
      cy.logStep('Clicked Register Button');
      return this;
    }
  }
  
  module.exports = RegisterPage;
  