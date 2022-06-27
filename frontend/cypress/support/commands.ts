/// <reference types="cypress" />

Cypress.Commands.add('login', (username, password) => {
  cy.visit('http://localhost:3000/login')
  cy.get('input[name="Email"]').should('be.visible').type(username)
  cy.get('input[type=password]').should('be.visible').type(`${password}{enter}`)
  cy.wait(2000)
  cy.url().should('eq', 'http://localhost:3000/home')
})

Cypress.Commands.add('loginSession', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[name="Email"]').should('be.visible').type(username)
    cy.get('input[type=password]').should('be.visible').type(`${password}{enter}`)
    cy.wait(2000)
    cy.url().should('eq', 'http://localhost:3000/home')
  })
})

declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string): Chainable<Element>
    loginSession(username: string, password: string): Chainable<Element>
  }
}
