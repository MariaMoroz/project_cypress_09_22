/// <reference types="Cypress" />

import SubmitLanguagePage from "../pageObjects/SubmitLanguagePage"

const submitLanguagePage = new SubmitLanguagePage()

const inputNames =
    ['language', 'descriptor', 'url', 'author', 'email', 'homepage', 'captcha', 'category', 'code', 'teammsg']

const inputValues =
    ['Javascript', 'Some description about JS', 'developer.mozilla.org/ru/docs/Web/JavaScript', 'safbek',
    'safbek@list.ru', 'none', 'notValidCaptcha', 'category', 'code', 'teammsg']

describe('SubmitLanguagePage Test', ()=> {
    beforeEach('Navigate to SubmitLanguagePage', () => {
        cy.visit('/submitnewlanguage.html')
    })

    it('validate security code input', () => {
        inputNames.forEach((inputName, inputValuesIndex) => {
            submitLanguagePage.fillInput(inputName, inputValues[inputValuesIndex])
        })

        submitLanguagePage.submitLanguagePageSelectors['submit']().click()
            submitLanguagePage.submitLanguagePageSelectors['error']()
                .should('be.visible')
                .and('have.text', 'Error: Invalid security code.')
    })
})
