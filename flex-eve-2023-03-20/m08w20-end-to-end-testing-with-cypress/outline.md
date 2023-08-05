# Outline

### Install Cypress
* `npm install --save-dev cypress@9.7.0`
* Open Cypress with `node_modules/.bin/cypress open`
* Create a script called `cypress` to run the above
* Remove the example tests

### Create a new file `cypress/integration/01_cypress.spec.js`

```js
describe('Cypress', () => {
  it('is working', () => {
    assert.strictEqual(true, true);
    // expect(true).to.equal(true);
  });
});
```

### Edit `cypress.json`

```json
{
  "viewportWidth": 1280,
  "viewportHeight": 1200,
  "baseUrl": "http://localhost:8765"
}
```

### Start the app server running and add a new test to visit the site

```js
it('can visit the home page', () => {
  // cy.visit('https://google.com/');
  cy.visit('http://localhost:8765');
});
```

### Add a new spec file `cypress/integration/02_filters.spec.js`

```js
describe('Filters', () => {

  it('can uncheck the explicit check box', () => {
    cy.visit('http://localhost:8765');

    // cy.get('.filters__form-group')
    //   .first()
    //   .find('input')
    //   .uncheck()
    //   .should('not.be.checked');

    cy.get('#Explicit')
      .uncheck()
      .should('not.be.checked');
  });

  it('can check the "Single" checkbox', () => {
    cy.get('#Single')
      .check()
      .should('be.checked');
  });
});
```

### Convert affected files to use `cy.visit('/');` instead
* Show the changes in Cypress in Settings => Configuration highlighting the `baseUrl` key

### Pull the repeating `cy.visit('/');` out to a `beforeEach`

```js
beforeEach(() => {
  cy.visit('/');
});
```

<!-- ### Demonstrate clicking a label to toggle a checkbox

```js
it('toggles a check box by clicking on the label', () => {
  cy.contains('EP')
    .click();

  cy.get('#EP')
    .should('be.checked');
});
``` -->

### Add a new spec file `cypress/integration/03_text-input.spec.js`

```js
describe('Text Input', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('accepts text input', () => {
    cy.get('.search__form')
      .find('input')
      .type('Led Zeppelin', { delay: 100 })
      .should('have.value', 'Led Zeppelin');
  });
});
```

### Add another test to handle backspace

```js
it('can handle backspace', () => {
  cy.get('.search__form')
    .find('input')
    .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
    .should('have.value', 'Bee Gees');
});
```

### Refactor the tests to use `beforeEach`

```js
describe('Text Input', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.get('.search__form')
    //   .find('input')
    //   .as('searchField');

    // use `as` to alias vars and reference them with @varName
    cy.get('[name="search"]')
      .as('searchInput');
  });

  it('accepts text input', () => {
    cy.get('@searchField')
      .type('Led Zeppelin', { delay: 100 })
      .should('have.value', 'Led Zeppelin');
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });
});
```

### Add `itunes.json` to `cypress/fixtures`

### Add a new spec file `cypress/integration/04_display-results.spec.js`

```js
describe('Display Results', () => {
  it('displays results from an API', () => {
    // visit the app
    cy.visit('/');

    // intercept the GET request and provide the fixture as response
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('getSearch');

    // get the search input and type into it
    cy.get('[name="search"]')
      .type('Ella Fitzgerald', {delay: 175})
      .should('have.value', 'Ella Fitzgerald');

    // get the spinner that should be visible
    cy.get('.spinner')
      .should('be.visible');

    // wait while the search results come back then verify them
    cy.wait('@getSearch')
      .get('.album__name')
      .contains('Ella & Louis Christmas')
      .should('be.visible');
  });
});
```