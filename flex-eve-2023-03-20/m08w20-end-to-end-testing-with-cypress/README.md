# M08W20 - End-to-End Testing with Cypress

### To Do
- [ ] Jest vs Cypress
- [ ] Install and configure Cypress
- [ ] Design End-to-End Tests with Cypress

### Jest vs Cypress
- Jest
  - Command line test runner
  - Testing expectation (or assertions) against a fake DOM
  - Used for unit and integration testing (mostly)
  - Pros:
    - Quick to write targetted / technical tests
    - Easy to test at an atomic level (turn off, or don't call what isn't needed)
    - Easy mocking of functions (also avail. in Cypress)
    - Fast and cheap
    - Integrates nicely with our Git / GitHub repos (also avail. in Cypress)

- Cypress
  - Opens a browser window to execute the tests in (i.e. from a user's perspective)
  - Performs operations and interacts with the site the way that a user would (e.g. typing into input fields, clicking on buttons)
  - Used for integration and E2E testing (mostly)
  - Pros:
    - Easy mocking of functions (also avail. in Jest)
    - Integrates nicely with our Git / GitHub repos (also avail. in Jest)
    - Opens doors to testing responsive features
    - High confidence the app behaves appropriately for users
    - Able to watch the test process (help with debugging)
    - Tests more than just "code", we can check content, CSS, etc. potentially
    - Cypress is capable of taking screenshots and video recordings of its tests
    - Completely language / stack agnostic, can write tests for any web app you can access in the browser, local or otherwise
    - Documentation and UI are very mature and premium

### Install and Configure Cypress
- Cypress can be installed locally to the project (as a dev dependency) or globally on your OS

```bash
# npm install -g cypress@9.7.0
# npm install cypress@9.7.0
npm install --save-dev cypress@9.7.0
```

- Note: if you are using WSL2, make sure to update it to the latest version for a smooth installation process. More info [here](https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps)
```sh
wsl --update
wsl --shutdown
```

- Use the `open` command to start Cypress running

```bash
# global installation
cypress open

# local installation
node_modules/.bin/cypress open
```

- Add a script to `package.json` for a quick way to start Cypress

```json
"cypress": "node_modules/.bin/cypress open"
```

```bash
npm run cypress
```

- First time running cypress taks some time to set up
- We use the `cypress.json` file in the main directory to configure Cypress

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

- `baseUrl` tells Cypress where our application is hosted and what port it's listening on
- `viewportWidth` and `viewportHeight` specify the dimensions for Cypress' browser to use
- Feel free to change the width and height values if developing for a mobile-first site
- `cypress` directory, focus on fixtures and integration:
  - fixtures: fake/mock data
  - integration: tests also found in Cypress UI
  - plugins: ecosystem of plugins that add additional features
  - support: custom helper scripts for Cypress
- From UI, try running all tests
- Settings > Configuration shows settings in cypress.json

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


### Useful Links
- [Cypress Docs](https://docs.cypress.io/api/api/table-of-contents.html)
- [Cypress Best Practices (Official)](https://docs.cypress.io/guides/references/best-practices.html)
