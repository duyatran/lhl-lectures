describe('Filters', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can uncheck the Explicit check box', () => {
    cy.get('#Explicit') // DOM element
      .uncheck() // simulation of user behavior
      .should('not.be.checked'); // assertion
  });

  it('can check the Single check box', () => {
    cy.get('#Single') // DOM element
      .check() // simulation of user behavior
      .should('be.checked'); // assertion
  });

});