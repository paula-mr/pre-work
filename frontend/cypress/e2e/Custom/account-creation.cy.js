/// <reference types="cypress" />

describe('Create Account', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('loads everything correctly on home page', () => {
      // Confirm the home page loads everything correctly
      cy.get('h2').should('have.length', 1)
      cy.get('h2').first().should('have.text', 'Conecte ambientes de trabalho aos seus funcionários')
      cy.get('button').first().should('have.text', 'Entrar')
      cy.get('button').last().should('have.text', 'Cadastrar')

      
    })

    it('leads to account creation page', () => {
      cy.get('button').last().click()
      cy.url().should('include', '/cadastro')
    })

    it('creates an account', () => {
      cy.visit('http://localhost:3000/cadastro')

      // Create a different user email each time
      const currentTimeInMilliseconds=Date.now();

      // All fields must be visible - fill the data
      cy.get('input[name="Email"]').should('be.visible').type(`test@test.com+${currentTimeInMilliseconds}`)
      cy.get('input[name="Nome"]').should('be.visible').type('Test')
      cy.get('input[name="Sobrenome"]').should('be.visible').type('Person')
      cy.get('input[type=password]').should('be.visible').type('12345678')
      cy.get('button[class*=botaoCadastrar').first().click()

      // Wait until the server returns
      cy.wait(2000)

      // Confirm user got redirected
      cy.url().should('eq', 'http://localhost:3000/login')
      cy.get('.Toastify').should('contain.text', 'Cadastro efetuado')

      // Login works for the new account
      cy.login(`test@test.com+${currentTimeInMilliseconds}`, '12345678')
      
      cy.wait(2000)
      cy.url().should('eq', 'http://localhost:3000/home')
    })
  
  })
  