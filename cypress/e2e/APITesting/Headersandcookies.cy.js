describe("Headers and cookies", () => {
    let auth_token = null
    before("headers", () => {
        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",
            headers: { 'Content-Type': 'application/json' },
            body: {
                "username": "admin",
                "password": "password123"
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body.token))
            auth_token = response.body.token
        })
    })
    it("update the booking", () => {
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/3938',
            body: {
                "firstname": "Ashok",
                "lastname": "Kumar",
                "totalprice": 11199088321,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-09-01",
                    "checkout": "2019-10-01"
                },
                "additionalneeds": "Breakfast"
            },
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'token= '+auth_token

            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

})