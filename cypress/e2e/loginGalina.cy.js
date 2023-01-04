/// <reference types="Cypress" />

describe('Login page', () => {
  
  it('verify user can reach login page', () => {
    cy.visit(Cypress.env('CYPRESS_BASE_URL'));
  })
})