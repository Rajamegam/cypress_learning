describe("Test suite", function () {
  it("First testcase", function () {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM')

  })
  it("second testcase", function () {

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq','OrangeHRM1234 ')
    

  })
})