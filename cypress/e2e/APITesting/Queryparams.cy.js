describe("Query params", () => {
    it("Passing query params", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: { page: 2 }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).have.length(6)
            expect(response.body.data[0]).have.property('id', 7)
        })

    })

})