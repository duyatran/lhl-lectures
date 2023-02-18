describe('Text Input', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('[name="search"]')
      .as('searchInput');
  });

  it('accepts user\'s text input', () => {
    cy.get('@searchInput') // DOM element of text input
      .type('Adele', { delay: 200 }) // simulation of user behavior: type in sth
      .should('have.value', 'Adele') // assertion: should display
  });

  it('can handle special characters like backspace', () => {
    cy.get('@searchInput') // DOM element of text input
      .type('Adee{backspace}lee{backspace}', { delay: 200 }) // simulation of user behavior: type in sth
      .should('have.value', 'Adele') // assertion: should display
  });

});