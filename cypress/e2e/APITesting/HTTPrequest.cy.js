describe("HTTP requests", () => {
    it("GET call", () => {
        cy.request("GET", "https://reqres.in/api/users?page=2")
            .its('status')
            .should('equal', 200)
    })
    it("post call", () => {
        cy.request(
            {
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                    name: "test325464321221",
                    job: "leader"

                }
            }

        )
            .its('status')
            .should('equal', 201)
    })
    it("PUT call", () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {

                name: "morpheus",
                job: "zion resident"

            }

        })
            .its('status')
            .should('equal', 200)

    })
    it("DELETE call", () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/717'

        })
            .its('status')
            .should('equal', 204)
    })
})