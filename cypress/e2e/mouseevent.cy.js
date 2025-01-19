describe("mouse operations", () => {
    // it("mouseover", () => {

    // })
    // it("right click", () => {

    // })
    // it("double click", () => {

    // })
    it("drag and drop using plugin", () => {
        // here we can use the inbuild plugin available in the cypress, here we need to specify source and the target element for the drag and drop
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        const dataTransfer = new DataTransfer()
        cy.get("#column-a").trigger('dragstart', { dataTransfer })
        cy.get("#column-b").trigger('drop', { dataTransfer }).trigger('dragend')



    })
    it.only("scrolling", () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get("table[class='two-column td-image']:first-child>tbody>tr:nth-child(86)>td:nth-child(2)").scrollIntoView

    })
})