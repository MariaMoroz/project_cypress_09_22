/// <reference types="Cypress" />
const d = new Date();

describe('Create booking', () => {
    before(() => {
        cy.login(Cypress.env('email'), Cypress.env('password'));
       
    })

    it('Verify that correct Month and year displayed by default in the Departure date block', () => {
// get datetime
//const d = new Date();//Sun Oct 16 2022 21:35:25 GMT-0700 (Pacific Daylight Time)

    console.log(d.getUTCDate()) // 17
    console.log(d.getUTCMonth()) //9
    console.log(d.toDateString()) //Sun Oct 16 2022 [1] = Oct
    console.log(d.getUTCFullYear()) //2022



    })

    it('Verify that user can swich  "Week/Month" view', () => {  

        cy.get('div.calendar-day-selection-wrapper .day-wrapper').should('be.visible').should('have.length',7);
        cy.get('.calendar-view-week').should('have.class', 'selected');
        cy.get('.calendar-view-week').click();

        cy.get('.calendar-view-month').should('have.class', 'selected')
        cy.get('div.calendar-day-selection-wrapper .day-wrapper').should('be.visible').should('have.length', 42); // >= 35
        cy.get('div.calendar-month-wrapper').should('be.visible')
    })  

    it('Verify that user can select month from dropdown menu when Month view option on', () => {
        //cy.get('select[name="calendar_month"]').select(1)//should be next month
        // let text = cy.get('select[name="calendar_month"] option').then(function($option){
        //     //method text to obtain text content
        //     const t = $option.text()
        //     expect(t).to.contains(d.getUTCFullYear())
        // //assertexpected Oct 2022Nov 2022Dec 2022Jan 2023Feb 2023Mar 2023Apr 2023May 2023Jun 2023Jul 2023Aug 2023Sep 2023Oct 2023 to include 2022
        // })
        
    })
})