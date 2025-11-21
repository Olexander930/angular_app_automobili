describe('Car shop full user flow', () => {

  it('should load cars list, open details page and display car info', () => {
    cy.visit('http://localhost:4200');
    cy.get('a[href="/cars"]', { timeout: 10000 }).click();
    cy.url().should('include', '/cars');
    cy.get('app-auto-card').should('have.length.at.least', 1);
    cy.get('app-auto-card')
      .first()
      .find('.details-link')
      .click();
    cy.url().should('include', '/cars/');
    cy.get('h1, h2, h3')
      .invoke('text')
      .then((text) => {
        expect(text).to.match(/(BMW|Audi|Mercedes|Toyota|Skoda)/);
      });
  });
});
