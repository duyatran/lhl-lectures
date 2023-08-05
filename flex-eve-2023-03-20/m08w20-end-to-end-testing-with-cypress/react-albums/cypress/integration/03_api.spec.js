it('display API results', () => {

  // visit the app
  cy.visit('http://localhost:8765/')

  // tell cypress that please intercept my request to itunes and use my fake data
  cy.intercept('GET', '**/search*', {fixture: 'itunes'})
    .as('loadData')

  // type "Daft Punk" into the input field
  cy.get('.search__form')
    .find('input')
    .type('Daft Pun{backspace}nk', {delay: 200})

  // assert spinner is visible
  cy.get('.spinner')
    .should('be.visible')

  // wait for results to load
  cy.wait('@loadData')

  // pick out a Daft Punk album, assert it's visible on screen
  cy.contains('Random Access Memories')
    .should('be.visible')

  // uncheck the explicit check box
  cy.get('#Explicit')
    .uncheck();

  // make sure the explicit album no longer appears
  cy.get('article.album')
    .should('not.contain', 'Daft Club');
})