/**
 * note
 * here we have 2 approaches
 * 1. direct passing of json file in the test case - in Direct access form the fixtures file(code commented)
 * 2. if we are going to use the same test data for multiple cases, we need to declare it in the before hook and assign to the global variable
 */
describe("fixtures", () => {
    let user
    let pwd
    let value
    before(() => {
        cy.fixture('orangehrm.json').then((data) => {
            user = data.username
            pwd = data.password
            value = data.expected
        })
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    // it("Direct access from the fixtures file", () => {
    //     cy.fixture('orangehrm.json').then((data) => {
    //         cy.get("input[name='username']").type(data.username)
    //         cy.get("input[name='password']").type(data.password)
    //         cy.get("button[type='submit']").click()
    //         cy.get("span[class='oxd-topbar-header-breadcrumb']").should('have.text', data.expected)


    //     })

    // })
    it('fixturedemo', () => {
        cy.get("input[name='username']").type(user)
        cy.get("input[name='password']").type(pwd)
        cy.get("button[type='submit']").click()
        cy.get("span[class='oxd-topbar-header-breadcrumb']").should('have.text', value)

    })
})