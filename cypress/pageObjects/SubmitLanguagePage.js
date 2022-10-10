class submitLanguagePage {
    submitLanguagePageSelectors = {
        language: () => cy.get('input[name="language"]'),
        descriptor: () => cy.get('input[name="descriptor"]'),
        url: () => cy.get('input[name="url"]'),
        author: () => cy.get('input[name="author"]'),
        email: () => cy.get('input[name="email"]'),
        homepage: () => cy.get('input[name="homepage"]'),
        captcha: () => cy.get('input[name="captcha"]'),
        category: () => cy.get('select[name="category"]'),
        code: () => cy.get('textarea[name="code"]'),
        teammsg: () => cy.get('textarea[name="teammsg"]'),
        submit: () => cy.get('input[name="submitlanguage"]'),
        error: () => cy.get('#main > p')
    }

    fillInput(inputName, inputValue) {
        return this.submitLanguagePageSelectors[inputName]().type(inputValue)
    }
}

export default submitLanguagePage;
