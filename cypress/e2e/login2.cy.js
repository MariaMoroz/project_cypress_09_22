/// <reference types="Cypress" />

describe('Login page', () => {
    it('verify user can reach login page', () => {
      cy.visit(Cypress.env('baseUrl'));
      cy.get('div.inner a.login').click();
      cy.get('div#loginModal h2.text-center').should('have.text', 'Enter QA Test OP');
    })
    it('verify user can login with valid credentials', () => {
      cy.get('#byemail div.col-sm-6 > input[data-check="email"]').type('galina@qatest.site', {force: true});
      cy.get('#byemail input[name="password"]').type(Cypress.env('password'), {force: true});
      cy.get('#byemail input[value="SIGN IN"]').click();
    })  
})