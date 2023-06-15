describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    // just need to check that cy.get('h1') contains any text
    cy.get('h1').contains('GMoney Takes');
  });
});
