/// <reference types="Cypress" />

import BasePage from "../pageObjects/BasePage";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();
const basePage = new BasePage();

describe('test', ()=>{
    it('First test', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        basePage.getHeader().should('be.visible');
    })



})