/// <reference types="Cypress" />

import submitLanguagePageData from '../../fixtures/submitLanguagePageData.json'

import SubmitLanguagePage from "../../pageObjects/oldProjectPages/SubmitLanguagePage"

const submitLanguagePage = new SubmitLanguagePage()



describe('SubmitLanguagePage Test', () => {
    beforeEach('Navigate to SubmitLanguagePage', () => {
        cy.visit('https://www.99-bottles-of-beer.net/submitnewlanguage.html')
    })

    it('validate security code input', () => {
        cy.fixture('submitLanguagePageData').then(({ inputNames, inputValues }) => {
            inputNames.forEach((inputName, inputValuesIndex) => {
                submitLanguagePage.fillInput(inputName, inputValues[inputValuesIndex])
            })

            submitLanguagePage.submitLanguagePageSelectors['submit']().click()
            submitLanguagePage.submitLanguagePageSelectors['error']()
                .should('be.visible')
                .and('have.text', 'Error: Invalid security code.')
        })
    })
})
