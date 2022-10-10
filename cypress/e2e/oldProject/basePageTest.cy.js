/// <reference types="Cypress" />

import BasePage from "../../pageObjects/oldProjectPages/BasePage";

const basePage = new BasePage();

describe('Base Page', () => {
    before( () => {
        cy.visit('https://www.99-bottles-of-beer.net');
    });

    it('Verify the header is visible on BasePage', () =>{
        basePage.getHeaderText().should('be.visible');
        basePage.getHeaderSecondText().should('be.visible');
    });

    it('Verify all menu are visible on BasePage', () =>{
        basePage.getMenuStart().should('be.visible');
        basePage.getMenuBrowseLanguages().should('be.visible');
        basePage.getMenuSearchLanguages().should('be.visible');
        basePage.getMenuTopLists().should('be.visible');
        basePage.getMenuGuestbook().should('be.visible');
        basePage.getMenuSubmitNewLanguage().should('be.visible');
    });

    it('Verify all Footer  menu are visible  on BasePage', () =>{
        basePage.getFooterMenuStart().should('be.visible');
        basePage.getFooterMenuBrowseLanguages().should('be.visible');
        basePage.getFooterMenuSearchLanguages().should('be.visible');
        basePage.getFooterMenuTopLists().should('be.visible');
        basePage.getFooterMenuGuestbook().should('be.visible');
        basePage.getFooterMenuSubmitNewLanguage().should('be.visible');
    });
});

