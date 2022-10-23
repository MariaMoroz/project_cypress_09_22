/// <reference types="Cypress" />


describe('Bookings page', () => {
    before(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('email'), Cypress.env('password'));
    })

    it('verify user can reserve a ticket as soon as available', () => {  
        cy.get('div.day-wrapper').contains('28').then(($el, index) => {
            cy.wrap($el).click();
        })        
        cy.wait(8000)
        cy.get('div.trip').then((trip) => {
            expect(trip).to.be.visible;
            const text = trip.find('span.availability').text();
            if(text.includes('tickets available')){
                cy.wrap(trip).eq(0).click()
            }  
        })
        
        cy.get('table.seats tr td').each((seats) => {
            if(seats.hasClass('selected')){
                cy.get('div.passenger-wrapper input[name="passenger-name[]"]').type('A')
                cy.get('.btn-group > .dropdown-toggle').click();
                cy.get('ul.dropdown-menu li a.btn-reserve-tickets').click();
                return false;
            }
        })
        
        cy.get('a[href="/orders/"]').click();  
        cy.get('table#data tbody >tr')
    }) 

     
})