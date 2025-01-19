/**
 * Notes
 * Here we can create a new custom commands which are mostly repetitive and we can use those in the testcases
 * we need to create commands in the commands.js file and we can call them with the name in the testcases
    Cypress.Commands("clickLink", (label) => {
        cy.get(a).contains(lablel).click()

    })
* here "clickLink" is the name and we are using in the test case like this
        cy.clickLink("Apple Macbook Pro 13-inch")
* in this suite,we are doing three this
    1. click on the link using label
    2. overwriting the existing commands
    3. reusable custom commands

 */
describe("Custom commands", () => {
    it("handling links", () => {
        cy.visit("https://demo.nopcommerce.com")
        //this is a direct method
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        // this is using command which is similar to the direct method
        cy.clickLink("Apple Macbook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text', "Apple MacBook Pro 13-inch")

    })
    it("login",()=>{
        cy.visit("https://demo.nopcommerce.com")

        cy.loginapp("test@gmail.com","123455")
    })
})