describe('checkbox and radiobutton', () => {
    it('radiobutton testcases', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

    })
    it('checbox testcases', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("input#monday").should('be.visible')
        cy.get('input#monday').check().should('be.checked')
        cy.get('input#monday').uncheck().should('not.be.checked')
        cy.get("input[class='form-check-input'][type='checkbox']").check().should('be.checked')
        cy.get("input[class='form-check-input'][type='checkbox']").uncheck().should('not.be.checked')
        cy.get("input[class='form-check-input'][type='checkbox']").first().check().should('be.checked')
        cy.get("input[class='form-check-input'][type='checkbox']").last().check().should('be.checked')
    })
})