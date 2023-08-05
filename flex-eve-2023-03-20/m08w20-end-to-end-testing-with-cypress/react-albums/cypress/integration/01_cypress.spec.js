describe('tests for Cypress', () => {
  it('is working', () => {
    assert.strictEqual(true, true);
  })

  it('can visit a website', () => {
    cy.visit("http://localhost:8765/")
  })
})