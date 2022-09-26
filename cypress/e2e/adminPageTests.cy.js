import AdminPage from "../pageObjects/AdminPage";

const adminPage = new AdminPage();

describe('Admin Page elements', ()=>{

    it('Admin page open', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm')
        adminPage.getTitleAdmin().should('be.visible');
    })



})