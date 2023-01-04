// /// <reference types="Cypress" />


// describe('Bookings management', () => {
//     before(() => {
//         cy.visit(Cypress.env('baseUrl'));
//         cy.login(Cypress.env('email'), Cypress.env('password'));
//         cy.get('a[href="/orders/"]').click();
//     })

//     it('verify user can delete the column STATUS from table', () => {  
//         cy.get('.dataTables_scrollHeadInner > .table tr th').as('headerTable').should('contain', 'Status');
//         cy.get('#table-columns-settings-default').click();
//         cy.get('input[value="status"]').uncheck();
//         cy.get('button.btn-success').contains('OK').click();
//         cy.get('@headerTable').should('not.contain', 'Status');
//     })  
// })

