describe('Handling dropdowns', () => {
    it.skip('static dropdown', () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country').select('Italy').should('have.value', 'Italy')
    })
    it.skip("dynamic dropdown", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        //cy.get(".select2-search__field").type("Italy")
        // cy.get("span[class='select2-results'] ul li").each(($el) => {
        //     if ($el.text().trim()=="Afghanistan"){
        //         cy.wrap($el).click()
        //     }

        // })
        cy.get(".select2-search__field").type("Italy").type('{enter}')


    })
    it("Auto suggested dropdown", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("SachinTendulkar")
        


    })
})