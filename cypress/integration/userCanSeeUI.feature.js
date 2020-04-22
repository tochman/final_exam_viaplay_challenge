describe('User Interface', () => {
  before(() => {
    cy.server()
    cy.visit("/")
  });

  it('shows a header', () => {
    cy.get("h1").should("contain", "Zup wörld!")
  });
// Nice, cypress funkar! :D
})
