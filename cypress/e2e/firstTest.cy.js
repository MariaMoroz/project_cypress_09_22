/// <reference types="Cypress" />

Cypress.on('uncaught:exception', () => false)

import BasePage from "../pageObjects/BasePage";

const basePage = new BasePage();

describe('test', ()=>{

    it('First test', () =>{
        cy.visit('/')
        basePage.getHeaderText().should('be.visible');
    })
})

