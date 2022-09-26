import BasePage from "./BasePage";

class AdminPage extends BasePage{
    getTitleAdmin(){
        return cy.get('h1.title');
    } 

    getLoginPanel() {
        return cy.get('#loginPanel')
    } 

    getLoginPanelTitle() {
        return cy.get('#leftPanel > h2')
    } 

    getUsername() {
        return cy.get("cy.get('form > :nth-child(1) > b')")
    } 

    getUsernameInputField() {
        return cy.get("cy.get('form > :nth-child(2) > .input')")
    } 

    getPassword() {
        return cy.get("cy.get(':nth-child(3) > b')")
    } 

    getPasswordInputField() {
        return cy.get("cy.get(':nth-child(4) > .input')")
    } 

    getLoginButton() {
        return cy.get("cy.get(':nth-child(5) > .button')")
    } 

    getForgotLogin() {
        return cy.get("cy.get('#loginPanel > :nth-child(2) > a')")
    } 

    getRegisterUser() {
        return cy.get("cy.get('#loginPanel > :nth-child(3) > a')")
    } 

     
}

export default AdminPage;