/// <reference types="Cypress" />

import LoginPage from "../pageObjects/LoginPage";

describe('Login',() =>{

    const loginPage = new LoginPage();

    before(() => {
        cy.visit('/');
    })

    it('should log in with valid credentials', () => {
        loginPage.setInputUsername();
        loginPage.setInputPassword();
        // loginPage.getButtonLogIn().click();
    })
})

