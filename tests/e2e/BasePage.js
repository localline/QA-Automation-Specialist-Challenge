class BasePage {
  open() {
    cy.visit(Cypress.env('indexUrl'));
    return this;
  }
}

export { BasePage };
