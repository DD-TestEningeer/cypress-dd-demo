class TextboxTestPage {
    visit() {
      cy.visit('/textbox.html');
      cy.logStep('Visited /textbox test');
      return this;
    }

    fillFullname(username) {
        cy.get('input[name="fullName"]').clear().type(username);
        cy.logStep(`Entered fullname: ${username}`);
        return this;
      }
  
    fillEmail(email) {
      cy.get('input[name="userEmail"]').clear().type(email);
      cy.logStep(`Entered email: ${email}`);
      return this;
    }
  
    fillCurrentAddress(currentAddress) {
      cy.get('input[name="currentAddress"]').clear().type(currentAddress);
      cy.logStep('Entered currentAddress');
      return this;
    }

      
    fillPermanentAddress(permanentAddress) {
        cy.get('input[name="permanentAddress"]').clear().type(permanentAddress);
        cy.logStep('Entered permanentAddress');
        return this;
      }
  
    submit() {
      cy.contains('Submit').click();
      cy.logStep('Clicked Submit Button');
      return this;
    }
  }
  
  module.exports = TextboxTestPage;
  