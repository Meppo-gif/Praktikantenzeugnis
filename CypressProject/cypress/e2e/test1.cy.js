/// <reference types="cypress" />

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('.jw8mI').scrollTo('bottom');
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf', {timeout:5000}).type('Automation Step by Step{Enter}')
    //cy.contains('Google Suche').click()
    cy.wait(2000)

    cy.contains('Videos').click()
})