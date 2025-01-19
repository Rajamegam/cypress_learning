describe("iframe", () => {
    it("approach1", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)
            cy.wait(2000)
            iframe.clear().type("Welcome")
    })
})