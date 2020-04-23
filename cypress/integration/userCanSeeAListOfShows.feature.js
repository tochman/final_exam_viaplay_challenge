describe('list series', () => {

  before(() => {
    cy.visit('/')
  });

  it('on the main view of the app', () => {
    cy.get('#shows')
      .children().eq(0)
      .should('have.id', 'show-1')
      .find('img').then(image => {
        expect(image).to
          .have.attr('src')
          .include('viaplay-prod')
          .include('width=960&height=540')
        expect(image).to.have.attr('alt').equal('Paradise Hotel')
      })

    cy.get('#shows')
      .children().eq(1)
      .should('have.id', 'show-2')
      .find('img')
      .should('have.attr', 'alt')
      .should('equal', "Grey's Anatomy")

    cy.get('#shows')
      .children().eq(2)
      .should('have.id', 'show-3')
      .find('img')
      .should('have.attr', 'src')
      .should('include', "viaplay-prod")
  });
});