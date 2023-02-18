describe('Retrieve itunes data', () => {

  it('displays results from itunes API (with mock data)', () => {
    // visit the app
    cy.visit('/');

    // use fixture data for search request
    cy.intercept('GET', '**/search*', { fixture: 'itunes.json' })
      .as('getSearch');

    // type into search input
    cy.get('[name="search"]')
    .type('Daft Punk', { delay: 200 })
    .should('have.value', 'Daft Punk')

    // see spinner visible
    cy.get('.spinner')
      .should('be.visible');

    // wait while search results comes back, verify result is correct
    cy.wait('@getSearch')
      .get('.album__name')
      .contains('Human After All') // album called Human After All by Daft Punk
      .should('be.visible');
  });

});