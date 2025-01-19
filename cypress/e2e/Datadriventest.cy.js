describe("Data driven test", () => {

    it("DatadrivenTest", () => {
        cy.fixture("orangehrm2.json").then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach((userdata) => {
                cy.get("input[name='username']").type(userdata.username)
                cy.get("input[name='password']").type(userdata.password)
                cy.get("button[type='submit']").click()
                if (userdata.username == "Admin" && userdata.password == "admin123") {
                    cy.get("span[class='oxd-topbar-header-breadcrumb']").should('have.text', userdata.Expected)
                    cy.get(".oxd-userdropdown-tab").click()
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
                    cy.wait(5000)

                }

                else {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')

                }


            });

        })




    })
})