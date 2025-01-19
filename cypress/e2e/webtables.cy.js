describe('Handle table', () => {
    beforeEach('login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        // cy.get("#input-username").type("demo")
        // cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()
        cy.get("#menu-customer>a").click()
        cy.get("li[id='menu-customer'] ul li:nth-child(1)").click()

    })
    it('Check rows and columns', () => {
        cy.get("#customer").should('be.visible')
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 6)

    })
    it.skip('Check cell data from specific rows and columns', () => {


    })
    it.skip('Read all the rows and columns data in the first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get("td").each(($col, index, $columns) => {
                    cy.log($col.text())

                })

            })

        })


    })
    it.only('pagination', () => {
        let total_pages = 5
        for (let i = 1; i < total_pages; i++) {
            if (total_pages > 1) {
                cy.get("ul[class='pagination']>li:nth-child(" + i + ")").click()
            }
            cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    cy.get("td:nth-child(3)").then((e) => {
                        cy.log(e.text())
                    })
                })
            })



        }
    })
})