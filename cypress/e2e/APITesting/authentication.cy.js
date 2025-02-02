describe("Authentication", () => {
    it("basic auth", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.be.true

            })
    })
    it("Digest auth", () => {
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: 'Digest'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.be.true

            })
    })
    const token = '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'
    it("Bearer token", () => {

        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)

            })

    })
    it.only("oauth2.0", () => {

        cy.request({
            method: 'POST',
            url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
            auth: {
                username: 'AUv8rrc_P-EbP2E0mpb49BV7rFt3Usr-vdUZO8VGOnjRehGHBXkSzchr37SYF2GNdQFYSp72jh5QUhzG',
                password: 'EMnAWe06ioGtouJs7gLYT9chK9-2jJ--7MKRXpI8FesmY_2Kp-d_7aCqff7M9moEJBvuXoBO4clKtY0v'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            body: {

                "grant_type": "client_credentials",
                "ignorecache": "true",
                "return_auth_schemas": "true",
                "return_client_metadata": "true",
                "return_unconsented_scopes": "true"

            }
        })
            .then((response) => {
                cy.log(JSON.stringify(response.body))
                const access_token = response.body.access_token
                cy.log('access_token: '+access_token)
            })
    })
})