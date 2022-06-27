/// <reference types="cypress" />

describe('Book Workstation', () => {

    before(() => {
      cy.loginSession('test@test.com', '12345678')
    })
    beforeEach(() => {
      cy.visit('http://localhost:3000/home')
    })

    it('cant book unavailable workstation', () => {
      cy.get('div[class*=containerImage] div[class*=image]').first().click()
      cy.wait(1000)
      cy.url().should('eq', 'http://localhost:3000/work-unit')

      // book station
      cy.get('[style*="background-color: rgb(0, 128, 0)"]').first().click()
      cy.get('button').contains('Agendar').click()
  
      // try to book already booked station
      cy.wait(2000)
      cy.get('[style*="background-color: rgb(204, 0, 0)"]').first().click()
      
      // get error toast
      cy.get('.Toastify').should('contain.text', 'Este assento já está reservado.')
    })

    it('can log out', () => {
      // Click log out button
      cy.get('button[aria-label="Voltar para página anterior"]').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
  
  })
  