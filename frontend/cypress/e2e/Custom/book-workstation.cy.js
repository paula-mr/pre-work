/// <reference types="cypress" />

describe('Book Workstation', () => {

  before(() => {
    cy.login('test@test.com', '12345678')
  })
  beforeEach(() => {
    cy.visit('http://localhost:3000/home')
  })

  it('can book available workstation', () => {
    cy.get('div[class*=containerImage] div[class*=image]').first().click()
    cy.wait(1000)
    cy.url().should('eq', 'http://localhost:3000/work-unit')

    cy.get('div[class*=datetimeInternal] button').first().click()
    cy.get('div[class*=MuiPickersCalendarHeader] button').eq(1).click()
    cy.get('div[class*=MuiPickersBasePicker] button:not([class*=dayDisabled])').eq(10).click()

    // Click an available workstation - specifically the 3rd one.
    cy.get('[style*="background-color: rgb(0, 128, 0)"]').first().click()
    // Confirm it has changed color
    cy.get('[style*="background-color: rgb(58, 115, 226)"]').should('have.length', 1)
    
    cy.get('button').contains('Agendar').click()
    
    // Wait until the server returns
    cy.wait(2000)
    cy.get('.Toastify').should('contain.text', 'Assento')
  })

})
