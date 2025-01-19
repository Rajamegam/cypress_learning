// we can take screenshot by using .screenshot() 
// we can specify the file name of the screenshot --> screenshot(<filename>)
// we can take screenshot of particular element alone
// cy.get("#dropdown").screenshot("dropdown screenshot")

describe("mytest", () => {
    // it("screenshots and videos", () => {
    //     cy.visit("https://the-internet.herokuapp.com/dropdown")
    //     cy.screenshot()
    //     cy.get("#dropdown").screenshot("dropdown screenshot")

    // })
    //automatically capture screenshot and video on failure - only this is happen while running through CLI
    it("screenshots and videos", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.screenshot()
        cy.get("#dropdown").should('not.be.visible').screenshot("dropdown assertion")

    })


})