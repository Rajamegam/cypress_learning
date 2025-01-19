describe('assertions', () => {
    it('implicit assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include', 'orangehrmlive')
            .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")



    })
    it("explicit assertions", () => {
        let expected_name = "Sophie Kühn"

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get('.oxd-userdropdown-name').then(($el) => {
            let user_name = $el.text()
            expect(user_name).to.equal(expected_name)
        })
    })
})