describe("handling child windows", () => {
    it("approach1", () => {
        //approach to remove the target attribute
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click()
        cy.go('back') //will go the parent tab

    })
    it('approach2',()=>{
        //approach to capture the url(getting the property of the href) and visit the url in the same page
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new'").then((e)=>{
            let url=e.prop('href')
            cy.visit(url)

        })
        
    })
})  