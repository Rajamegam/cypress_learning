describe('parsingJsonresponse', () => {
    let sum = 0
    it('parsing the JSOn', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).then((responsebody) => {
            expect(responsebody.status).to.eq(200)
            expect(responsebody.body[0].id).to.eq(1)
            expect(responsebody.body[0].rating.rate).to.eq(3.9)
            for (let i = 0; i < responsebody.body.length; i++) {

                cy.log(responsebody.body[i].price)
                sum = sum + responsebody.body[i].price

            }
            cy.log('sum_value:' + Math.round(sum))

        })

    })
})