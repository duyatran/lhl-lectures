# M08W20 - End-to-End Testing with Cypress

### To Do
- [ ] Jest vs Cypress
- [ ] Install and configure Cypress
- [ ] Design End-to-End Tests with Cypress

### Jest vs Cypress
- Jest:
  - Testing framework, command line test runner
  - Testing assertions (expectations) against a fake DOM
  - Used mostly for unit testing: testing the smallest "unit" (component) of code (e.g. field input)
                    integration testing: testing multiple "units" (component) of code (e.g. form)

- Cypress:
  - Used mostly for integration, end-to-end (E2E) testing: from user interaction in browser to back-end, back to front-end rendering of results
  - Opens a browser window to execute the tests in
  - Perform user operations and interacts with the web app (e.g. clicking on a button, typing inputs in fields)

### Install and configure Cypress
- `npm install --save-dev cypress@9.7.0`
- Open Cypress with `node_modules/.bin/cypress open`
- Create a script called `cypress` to run the above
- Remove the example tests
- `cypress` directory
  - **fixtures**: fake/mock data
  - **integration**: test suites (displayed in UI)
  - plugins: ecosystem of add-ons adding additional features
  - screenshots
  - support: custom helper scripts

### Common Commands
- jQuery included (`Cypress.$();`)
- Cypress is built on top of Mocha and uses Chai assertions
- `describe(), it(), and beforeEach()` from Mocha
  - `describe()` describes a block of tests
  - `it()` labels a specific test case/block/unit.
  - `beforeEach()` run set-up code before each test case.
- `cy.visit()` visits a web page.
- `cy.get()` retrieves an HTML element based on jQuery/CSS-like selectors.
  - `.as()` assigns an alias for later use in `cy.get()` or `cy.wait()`. Use an `@` in a selector to refer to it.
  - `.find()` retrieves a child element from inside of a selected element.
- `cy.intercept()` intercepts a particular request and do some logic (check its presence or stub the response)
- `cy.wait()` waits before proceeding with test blocks.
- `.click()`, `.type()`, `.check()`, `.uncheck()` are used to interact with elements and forms in a web page.

### Side notes
- [Cypress Docs](https://docs.cypress.io/api/api/table-of-contents.html)
- [Cypress Best Practices (Official)](https://docs.cypress.io/guides/references/best-practices.html)
- [Setting Up Cypress on Ubuntu WSL2](https://gist.github.com/pjobson/6b9fb926c59f58aa73d4efa10fe13654)
- Other common E2E testing frameworks: [puppeteer](https://pptr.dev/), [playwright](https://playwright.dev/)
