describe('Cypress sanity check', () => {
  it('is working just fine', () => {
    // use Chai assertions
    assert.strictEqual(true, true);
  });

  it('can visit my localhost react-albums', () => {
    cy.visit('/');
  });
});