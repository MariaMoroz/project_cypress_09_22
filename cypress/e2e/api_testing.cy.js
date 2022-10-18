/// <reference types="Cypress" />

describe("API in Cypress", () => { 

    let result;
  
    it('get request', () => {
        result = cy.request("https://qatest.site/api/getStationsList");
        result.its('status').should('equal', 200);
    })

    it('get StationsList request', () => {
        cy.request({
            method: "GET",
            url: "https://qatest.site/api/getStationsList",
            headers: {
                'key': '3be8b1fcfa2f963cd9480c5848803072'
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
            expect(body).has.property("result");
            expect(body.result[0]).has.property("id", 106904);
            expect(body.result[0]).has.property("name", "Bangkok Khao San"); 
        })
    })

    it('get Balance request', () => {
        cy.request({
            method: "GET",
            url: "https://qatest.site/api/getBalance",
            headers: {
                'key': '3be8b1fcfa2f963cd9480c5848803072'
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)

            expect(body).has.property("result");
            expect(body.result).has.property("balance").greaterThan(0);
            expect(body.result).has.property("currency", "USD"); 

            expect(body).has.property("request");
            expect(body.request).has.property("method", "getBalance");
        })
    })
});

